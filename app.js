import express from "express";
import UserRoutes from "./users/routes.js";
import cors from "cors";
import session from "express-session";
import mongoose from "mongoose";
const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/game-app";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.get("/", (req, res) => {
  res.send("Game App Backend with Node.js express");
});

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
UserRoutes(app);

app.listen(4000);
app.use(express.json());
const port = process.env.PORT || 4000;
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));
