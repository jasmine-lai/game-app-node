import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    dob: Date,
    role: {
      type: String,
      enum: ["GAMER", "DEVELOPER"],
      default: "GAMER",
    },
  },
  { collection: "users" }
);
export default userSchema;
