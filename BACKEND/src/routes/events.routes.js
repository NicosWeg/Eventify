import express from "express";
import { supabase } from "../config/database.js";
import { authUser } from "../middleware/auth.js";
export const router = express.Router();

router.get("/", authUser, async (req, res) => {
  try {
    const { data, error } = await supabase.from("events").select("*");
    if (error) {
      console.error({ error: error.message });
      return res.status(500).json({ error: error.message, success: false });
    }
    console.log(data);
    res.json(data);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ error: "Internal server error", success: false });
  }
});
