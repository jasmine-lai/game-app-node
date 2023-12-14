import model from "./model.js";
import mongoose from "mongoose";

export const createReview = (review) => model.create(review);

export const findAllReviews = () => model.find();

export const findReviewByGameId = (gameId) => model.find({ gameID: gameId });

export const findReviewById = (reviewId) => model.findById(reviewId);

export const findReviewByUserId = (userId) => model.find({user: userId});

export const updateReview = (reviewId, review) => {
    const { _id, ...updateFields } = review;
    const result = model.updateOne({ _id: new mongoose.Types.ObjectId(reviewId) }, { $set: updateFields }).exec();
}

export const deleteReview = (reviewId) => model.deleteOne({ _id: reviewId });
