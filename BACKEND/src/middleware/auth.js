import { sendError, sendSuccess } from "../utils/response.js";
import {supabase} from "../config/database.js";

export const authUser = async (req, res, next) => {
  if (req.headers["Authorization"] === 'anon') next();
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return sendError(res, "Missing header", 401);
    }
    const parts = authHeader.split(" ");
    if (parts[0] !== "Bearer") {
      return sendError(res, "Missing Bearer", 401);
    }

    const token = parts[1];
    if (!token || token.trim() === "") {
      return sendError(res, "Missing token", 401);
    }
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);
    if (!user || error) {
      return sendError(res, "Invalid token", 401);
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error: ", error);
    return sendError(res, "Error occured", 500);
  }
};
