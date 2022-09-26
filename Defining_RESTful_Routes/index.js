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
    comments: "this is so funny",
  },
  {
    username: "Alex",
    comments: "WTF????",
  },
  {
    username: "James",
    comments: "LOLOLOLOLOL",
  },
  {
    username: "Sarha",
    comments: "GOAT!!",
  },
  {
    username: "Tom",
    comments: "what...???",
  },
];



app.get("/comments", (req, res) => {
  res.render("comments/index", {comments});
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
