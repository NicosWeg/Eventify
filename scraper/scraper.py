import os
import re
from dotenv import load_dotenv
from telethon import TelegramClient, events
from pathlib import Path
from supabase import create_client, Client

# Load .env from the scraper directory
env_path = Path(__file__).parent / '.env'
load_dotenv(dotenv_path=env_path)

api_id = os.getenv("API_ID")
api_hash = os.getenv("API_HASH")

# Fetch Supabase credentials
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

# Connect to Supabase
try:
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    print("✅ Supabase connection successful!")
except Exception as e:
    print(f"❌ Failed to connect to Supabase: {e}")

if not api_id or not api_hash:
    raise ValueError("Error: API_ID or API_HASH is not found")

try:
    api_id_int = int(api_id)
except ValueError: 
    raise ValueError(f"API_ID must be a valid integer, got: {api_id}")

client = TelegramClient('anon', api_id_int, api_hash)

def parse_event_details(content):
    """
    Parse date, time, and location from message content.
    Returns a dict with 'date', 'time', 'location' or None if not found.
    """
    if not content:
        return None
    
    details = {}
    
    # Parse Date - look for patterns like "📅 Date: December 27, 2025" or "📅Date: ..."
    date_patterns = [
        r'📅\s*[Dd]ate[:\s]+([^🕒📍\n]+)',
        r'📅\s*[Dd]ate[:\s]+([^🕐📍\n]+)',
        r'[Dd]ate[:\s]+([A-Za-z]+\s+\d{1,2},?\s+\d{4})',
        r'[Dd]ate[:\s]+(\d{1,2}[/-]\d{1,2}[/-]\d{2,4})',
    ]
    for pattern in date_patterns:
        match = re.search(pattern, content, re.IGNORECASE)
        if match:
            details['date'] = match.group(1).strip()
            break
    
    # Parse Time - look for patterns like "🕒 Time: 16:00 PM" or "🕐Time: 11:00 AM"
    time_patterns = [
        r'🕒\s*[Tt]ime[:\s]+([^📅📍\n]+)',
        r'🕐\s*[Tt]ime[:\s]+([^📅📍\n]+)',
        r'🕑\s*[Tt]ime[:\s]+([^📅📍\n]+)',
        r'[Tt]ime[:\s]+(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm)?)',
        r'[Tt]ime[:\s]+(\d{1,2}:\d{2})',
    ]
    for pattern in time_patterns:
        match = re.search(pattern, content, re.IGNORECASE)
        if match:
            details['time'] = match.group(1).strip()
            break
    
    # Parse Location - look for patterns like "📍 Location: American Center Tashkent"
    location_patterns = [
        r'📍\s*[Ll]ocation[:\s]+([^📅🕒🕐\n]+)',
        r'📍\s*[Ll]ocation[:\s]+\[([^\]]+)\]',  # Handle markdown links
        r'[Ll]ocation[:\s]+([^📅🕒🕐\n]+)',
    ]
    for pattern in location_patterns:
        match = re.search(pattern, content, re.IGNORECASE)
        if match:
            location = match.group(1).strip()
            # Remove markdown links if present
            location = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', location)
            details['location'] = location
            break
    
    # Return details only if all three are found
    if 'date' in details and 'time' in details and 'location' in details:
        return details
    return None

async def process_message(message):
    """
    Process a single message: parse event details and save to database if valid.
    """
    if not message.text:
        print(f"⏭️  Skipping message {message.id}: No text content")
        return
    
    content = message.text.replace('\n', ' ')
    
    # Parse event details (date, time, location)
    event_details = parse_event_details(content)
    
    if not event_details:
        print(f"⏭️  Skipping message {message.id}: Missing date, time, or location")
        return
    
    # Prepare data for database insertion
    event_data = {
        "message_id": message.id,
        "content": content,
        "date": event_details['date'],
        "time": event_details['time'],
        "location": event_details['location'],
        "views": message.views if message.views else 0
    }
    
    # Insert message into Supabase events table
    try:
        result = supabase.table("events").insert(event_data).execute()
        print(f"✅ Saved message {message.id} to Supabase (Date: {event_details['date']}, Time: {event_details['time']}, Location: {event_details['location']})")
    except Exception as e:
        print(f"❌ Failed to save message {message.id}: {e}")

@client.on(events.NewMessage(chats="ACTashkent"))
async def new_message_handler(event):
    """
    Event handler for new messages in the ACTashkent channel.
    Automatically processes new messages when they arrive.
    """
    message = event.message
    print(f"📨 New message received: {message.id}")
    await process_message(message)

async def main():
    """
    Initial scraping of recent messages (optional).
    You can comment this out if you only want real-time monitoring.
    """
    await client.start()
    print("🔄 Running initial scrape of recent messages...")
    
    async for message in client.iter_messages("ACTashkent", limit=5):
        await process_message(message)
    
    print("✅ Initial scrape complete. Now listening for new messages...")

async def run_listener():
    """
    Start the client, run initial scrape, then keep it running to listen for new messages.
    """
    await client.start()
    
    # Optional: Run initial scrape of recent messages
    print("🔄 Running initial scrape of recent messages...")
    async for message in client.iter_messages("ACTashkent", limit=5):
        await process_message(message)
    print("✅ Initial scrape complete.")
    
    # Start listening for new messages
    print("👂 Listening for new messages in ACTashkent channel...")
    print("Press Ctrl+C to stop")
    
    # Keep the client running to listen for new messages
    await client.run_until_disconnected()

if __name__ == "__main__":
    # Run the event listener (for real-time monitoring)
    with client:
        client.loop.run_until_complete(run_listener())