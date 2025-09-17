import express from "express";
import bodyParser from "body-parser";
import postsRouter from "./routes/posts.js";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // ✅ to serve CSS

// Routes
app.use("/posts", postsRouter);

// Home redirect
app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
