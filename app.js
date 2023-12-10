import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import cors from "cors";
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/game-app");

const app = express();
app.get("/", (req, res) => {
  res.send("Game App Backend with Node.js express");
});

app.use(cors());
app.use(express.json());
UserRoutes(app);

app.listen(4000);
