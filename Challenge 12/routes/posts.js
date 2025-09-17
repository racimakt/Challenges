import express from "express";
const router = express.Router();

let posts = []; // in-memory storage

// GET all posts
router.get("/", (req, res) => {
  res.render("index", { posts });
});

// POST create new post
router.post("/", (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.redirect("/posts");
});

// GET single post
router.get("/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.render("post", { post });
});

export default router;
