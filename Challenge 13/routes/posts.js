import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.render("index", { posts });
});

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  await Post.create({ title, content });
  res.redirect("/posts");
});

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", { post });
});

router.get("/:id/edit", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("edit", { post });
});

router.put("/:id", async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/posts/" + req.params.id);
});

router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/posts");
});

export default router;
