import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Post", postSchema);
