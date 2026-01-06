import express from "express"
import {supabase} from "../config/database.js";
import { authUser } from "../middleware/auth.js";
export const router = express.Router(); 

router.get("/events", authUser, async (req, res) => {
  const { data, error } = await supabase.from("events").select("*");
  if (error) {
    console.error({error: error.message})
    return res.status(500).json({error: error.message, success: false})
  };
  console.log(data);
  res.json(data);
});

