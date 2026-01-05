import express from "express";

const userRoutes = express.Router();


userRoutes.get("/getUserName", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.json({ user_name: "anonim", loggedIn: false });

    if (authHeader.split(" ")[0] !== "Bearer")
      return res.status(401).json({ error: "Missing Bearer", success: false });
    const token = authHeader.split(" ")[1];
    if (token === "") return res.json({ user_name: "anonim", loggedIn: false });

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (!user || error)
      return res.json({ user_name: "anonim", loggedIn: false });

    const user_name = user.user_metadata?.name?.trim();

    if (!user_name) {
      return res.json({ user_name: "anonim", loggedIn: true });
    }
    res.json({ user_name: user_name, loggedIn: true });
  } catch (err) {
    console.error("Error in /getUserName", err.message);
    res.status(500).json({ message: "Server error", success: false });
  }
});

export default userRoutes;