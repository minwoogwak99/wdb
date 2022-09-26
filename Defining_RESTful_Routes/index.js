const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  {
    username: "Todd",
    comment: "this is so funny",
  },
  {
    username: "Alex",
    comment: "WTF????",
  },
  {
    username: "James",
    comment: "LOLOLOLOLOL",
  },
  {
    username: "Sarha",
    comment: "GOAT!!",
  },
  {
    username: "Tom",
    comment: "what...???",
  },
];

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect('/comments')
});

app.get("/comments", (req, res) => {
  console.log(comments);
  res.render("comments/index", { comments });
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  console.log(req.body);
  const { meat, qty } = req.body;
  console.log(meat);
  console.log(qty);
  res.send(`Here is your ${qty} ${meat} tacos!`);
});

app.listen(3000, () => {
  console.log("listen on port 3000");
});

/* 
GET /comments - list all comments
POST /comments - Create a new comment
GET /comments/:id - GET one comment using ID
PATCH /comments/:id - Update one comment 
DELETE /comments/:id - Destroy one comment
*/
