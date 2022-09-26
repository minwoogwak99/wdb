const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  { id: uuid(), username: "Todd", comment: "this is so funny" },
  { id: uuid(), username: "Alex", comment: "WTF????" },
  { id: uuid(), username: "James", comment: "LOLOLOLOLOL" },
  { id: uuid(), username: "Sarha", comment: "GOAT!!" },
  { id: uuid(), username: "Tom", comment: "what...???" },
];

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments", (req, res) => {
  console.log(comments);
  res.render("comments/index", { comments });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  console.log('new:',newCommentText);
  const foundcomment = comments.find((c) => c.id === id);
  console.log(foundcomment);
  foundcomment.comment = newCommentText;

  res.redirect("/comments");
});

//TACOS======================================================================
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
