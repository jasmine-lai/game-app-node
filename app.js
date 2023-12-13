import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import UserRoutes from "./users/routes.js";
import ReviewRoutes from "./reviews/routes.js";
import GameRoutes from "./games/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/game-app");

const app = express();
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

app.listen(4000);
