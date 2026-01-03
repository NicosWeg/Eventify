// Import
import dotenv from "dotenv";
import express from "express";
import { createClient } from "@supabase/supabase-js";
import cors from "cors";

import userRouter from './routes/users.js';

// Config
dotenv.config();
const app = express();
app.use(cors({ origin: 'http://localhost:5173', methods: ['GET', 'POST', 'PUT', 'DELETE'], credentials: true }))

// DB Client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);


// GET
app.use('/user', userRouter);

const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  if (token === null) return res.status(401).json({error: 'Missing token', success: false});

  const { data: {user}, error} = await supabase.auth.getUser(token);
  if (!user || error) return res.status(403).json({error: 'Invalid token', success: false});

  req.user = user;
  // if JWT is valid success
  // else deny 
  next();
}

app.post("/logIn", authUser, async (req, res) => {
  try {
    const { id } = req.user;
    const userAgent = req.header["user-agent"];
    const ip = req.ip;

    const { error } = await supabase
      .from('sign_in_logs')
      .insert([
        {
          user_id: id,
          ip_address: ip,
          user_agent: userAgent
        }
      ]);
    
      if (error) throw error;

      res.status(200).json({ message: "Login recorded", success: true});
  } catch (err) {
      res.status(500).json({error: err.message});
  }
});

app.get("/", async (req, res) => {
  res.send("hello world");
});

app.get("/events", async (req, res) => {
  const { data, error } = await supabase.from("events").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});


// POST /events
app.post("/events", async (req, res) => {
  try {
    const { title, date } = req.body;

    const { data, error } = await supabase
      .from("events") // exact table name
      .insert([{ title, date }]);

    if (error) throw error;

    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


app.listen(3000, () => {
  console.log("Running on port 3000");
})


// Set up the APIs
// One to validate user
// Two to get the events
// Based on them render out the page
// Use react-router
// Set up the scraper too

