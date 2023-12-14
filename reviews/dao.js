import model from "./model.js";
import mongoose from "mongoose";

export const createReview = (user) => model.create(user);

export const findAllReviews = () => model.find();

export const findReviewByGameId = (gameId) => model.find({ gameID: gameId });

export const findReviewByReviewId = (reviewId) => model.findById(reviewId);

export const updateReview = (reviewId, review) => {
    const { _id, ...updateFields } = review;
    const result = model.updateOne({ _id: new mongoose.Types.ObjectId(reviewId) }, { $set: updateFields }).exec();
}

export const deleteReview = (reviewId) => model.deleteOne({ _id: reviewId });
