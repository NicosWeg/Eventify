// Import
import express from "express";
import cors from "cors";
import { config } from "./config/env.js";

// Import Routes
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import eventsRoutes from "./routes/events.routes.js";
// Config
const app = express();

app.use(
  cors({
    origin: config.client_url,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use(authRoutes);
app.use(userRoutes);
app.use(eventsRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: config.node_env,
  });
});

// 404 handler (must be AFTER all other routes)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});
app.listen(config.port, () => {
  console.log(`Running on port ${config.port}`);
});
