import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
    {
        gameID: { type: String, required: true},
        user: { type: String, required: true},
        date: { type: String, required: true},
        title: { type: String, required: true},
        desc: { type: String, required: true},
    },
    { collection: "reviews" }
);
export default reviewSchema;

/*
   {
        "gameID": 100,
        "user": "fauna",
        "date": "3/21/2021",
        "title": "uuuuuuuuu",
        "desc": "did you know that fauna is an anagram of noelle?"
    },
*/