import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const config = {
  supabase_url: process.env.SUPABASE_URL,
  supabase_service_role_key: process.env.SUPABASE_SERVICE_ROLE_KEY,
  client_url: process.env.CLIENT_URL || "http://localhost:5173",
  port: process.env.PORT || 5000,
  node_env: process.env.NODE_ENV || "development",
};

if (!config.supabase_url || !config.supabase_service_role_key) {
  throw new Error("Missing env variables");
}
