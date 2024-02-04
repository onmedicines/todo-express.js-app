import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

var posts = new Array();
app.get("/", (req, res) => {
  let noOfPosts = posts.length;
  res.render("index.ejs", {
    noOfPosts: noOfPosts,
  });
});

app.get("/mylist", (req, res) => {
  res.render("viewposts.ejs", {
    posts: posts,
  });
});

app.post("/submit", (req, res) => {
  posts.push(req.body["post"]);
  let noOfPosts = posts.length;
  res.render("index.ejs", {
    posts: posts,
    noOfPosts: noOfPosts,
  });
});

app.post("/remove", (req, res) => {
  posts.splice(req.body.index, 1);
  res.render("viewposts.ejs", {
    posts: posts,
  });
});
app.post("/remove-all", (req, res) => {
  posts.splice(0, posts.length);
  res.render("viewposts.ejs", {
    posts: posts,
  });
});

app.listen(port);

// Export express api to vercel
export default app;
