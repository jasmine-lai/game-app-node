import mongoose from "mongoose";
import schema from "./schema.js";
import reviewSchema from "./schema.js";
const model = mongoose.model("reviews", reviewSchema);
export default model;
