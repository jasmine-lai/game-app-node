import express from "express";
import mongoose from "mongoose";

const app = express();
app.get("/", (req, res) => {
  res.send("Game App Backend with Node.js express");
});
app.listen(4000);
