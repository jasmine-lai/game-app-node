import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    role: {
      type: String,
      enum: ["GAMER", "ADMIN"],
      default: "GAMER",
    },
  },
  { collection: "users" }
);
export default userSchema;
