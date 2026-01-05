import { supabase } from "../config/database.js";
import { sendError, sendSuccess } from "../utils/response.js";
import { getClientIp } from "../utils/helpers.js";
import { authUser } from "../middleware/auth.js";
import express from "express";

const authRoutes = express.Router();

authRoutes.post("/logIn", authUser, async (req, res) => {
  try {
    const { id } = req.user;
    const userAgent = req.headers["user-agent"] || "Unknown";
    const ip = getClientIp(req);

    const { error } = await supabase.from("sign_in_logs").insert([
      {
        user_id: id,
        ip_address: ip,
        user_agent: userAgent,
      },
    ]);

    if (error) {
      console.error("DB insertion failed", {
        error: error,
        user_id: id || "unknown",
        timestamp: new Date().toISOString(),
      });
      return sendError(res, "Insertion failed", 500);
    }

    return sendSuccess(res, null, "Login recorded", 200);
  } catch (err) {
    console.error("Error occured", {
      error: err.message,
      timestamp: new Date().toISOString(),
    });
    return sendError(res, "Log in failed", 500);
  }
});

export default authRoutes;

