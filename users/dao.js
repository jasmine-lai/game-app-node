import model from "./model.js";
import mongoose from "mongoose";

export const createUser = (user) => model.create(user);

export const findAllUsers = () => model.find();

export const findUserById = (userId) => model.findById(userId);

export const findUserByCredentials = (usr, pass) =>
  model.findOne({ username: usr, password: pass });

export const findUserByUsername = (username) => {
  const s = 'username'
  const regex = new RegExp(s, 'i') // i for case insensitive
  model.find({ title: { $regex: regex } })
}

export const updateUser = (userId, user) => {
  const { _id, ...updateFields } = user;
  console.log(updateFields);
  const result = model.updateOne({ _id: new mongoose.Types.ObjectId(userId) }, { $set: updateFields }).exec();
}

export const deleteUser = (userId) => model.deleteOne({ _id: userId });
