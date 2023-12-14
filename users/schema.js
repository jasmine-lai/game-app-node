import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    bio: String,
    pfp: String,
    role: {
      type: String,
      enum: ["GAMER", "ADMIN"],
      default: "GAMER",
    },
    favGame: [String],
    following: [String]
  },
  { collection: "users" }
);
export default userSchema;
