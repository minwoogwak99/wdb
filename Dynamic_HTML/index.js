const express = require("express");
const path = require("path");
const app = express();
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//home
app.get("/", (req, res) => {
  res.render("home.ejs", {title: 'HOME'});
});

//cats
app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"];
  res.render("cats", { cats, title: cats });
});

//subreddit
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data, title: subreddit });
  } else {
    res.render("notFound", { subreddit, title: subreddit });
  }
});

//Random 
app.get("/rand", (req, res) => {
  const randNum = Math.floor(Math.random() * 10) + 1;
  res.render("random.ejs", { randNum, title: 'random'});
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
