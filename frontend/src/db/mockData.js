const events = [
  {
    id: 1,
    title: "Community Meetup",
    location: "City Hall",
    time: "6:00 PM",
    date: "2026-01-15",
    content: "Join us for a community meetup with talks and networking.",
  },
  {
    id: 2,
    title: "Tech Talk: React",
    location: "Tech Hub",
    time: "4:00 PM",
    date: "2026-01-20",
    content: "Deep dive into React and modern frontend patterns.",
  },
  {
    id: 3,
    title: "Art & Coffee",
    location: "Gallery 9",
    time: "2:00 PM",
    date: "2026-02-01",
    content: "Casual art showing with coffee and conversation.",
  },
];

export const getEvents = async () => {
  // simulate async fetch
  return new Promise((resolve) => setTimeout(() => resolve(events), 50));
};

export const getEventById = async (id) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(events.find((e) => e.id === Number(id))), 50)
  );
};

export default { getEvents, getEventById };
