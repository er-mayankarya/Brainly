import mongoose, { Schema, Types } from "mongoose";

// User Schema & Model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = mongoose.model("Users", userSchema);

// Content Schema & Model
const contentTypes = ["image", "video", "article", "audio"]; // Extend as needed in future

const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: "Tag" }],
  userId: { type: Types.ObjectId, ref: "Users", required: true },
});

export const ContenTModel = mongoose.model("Contents", contentSchema);

// Tag Schema & Model
const tagSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
});

export const TagModel = mongoose.model("Tags", tagSchema);

//Link Schema & Model
const linkSchema = new mongoose.Schema({
  hash: { type: String },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
});

export const LinkModel = mongoose.model("Links", linkSchema);
