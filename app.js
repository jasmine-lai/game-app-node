import "dotenv/config";
import express from "express";
import cors from "cors";
import session from "express-session";
import mongoose from "mongoose";

import UserRoutes from "./users/routes.js";
import ReviewRoutes from "./reviews/routes.js";
import GameRoutes from "./games/routes.js";
import HomeRoutes from "./home/routes.js";

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/game-app";
mongoose.connect("mongodb://127.0.0.1:27017/game-app"); //CONNECTION_STRING

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Game App Backend with Node.js express");
});

app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"//process.env.FRONTEND_URL
}));

app.use(express.json());

UserRoutes(app);
ReviewRoutes(app);
GameRoutes(app);
HomeRoutes(app);

app.listen(4000);
const port = process.env.PORT || 4000;
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));
