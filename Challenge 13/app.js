import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import postsRouter from "./routes/posts.js";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

mongoose
  .connect("mongodb://127.0.0.1:27017/challenge13", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB error:", err));

app.use("/posts", postsRouter);

app.get("/", (req, res) => res.redirect("/posts"));

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
