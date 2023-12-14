import model from "./model.js";
import mongoose from "mongoose";

export const createUser = (user) => model.create(user);
export const findUserById = (userId) => model.findById(userId);
export const findUserByCredentials = (usr, pass) =>
  model.findOne({ username: usr, password: pass });
export const findUserByUsername = (username) =>
  model.findOne({ username: username });
export const updateUser = (userId, user) => {
  const { _id, ...updateFields } = user;
  const result = model.updateOne({ _id: new mongoose.Types.ObjectId(userId)}, { $set: updateFields }).exec();
}
export const deleteUser = (userId) => model.deleteOne({ _id: userId });
