import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["GAMER", "DEVELOPER", "USER"],
      default: "USER",
    },
  },
  { collection: "users" }
);
export default userSchema;
