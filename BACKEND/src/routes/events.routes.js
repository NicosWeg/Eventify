import express from "express"
import {supabase} from "../config/database.js";
const eventsRoutes = express.Router(); 

eventsRoutes.get("/events", async (req, res) => {
  const { data, error } = await supabase.from("events").select("*");
  if (error) {
    console.error({error: error.message})
    return res.status(500).json("Error occured")
  };
  res.json(data);
});

export default eventsRoutes;