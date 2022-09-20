const express = require("express");
const app = express();
const port = 3000;

/* app.use((req, res) => {
  console.log("NEW REQUEST");
  res.send("<h1>This is response from a server</h1>");
}); */

app.get("/", (req, res) => {
  // res.send("this is the hompage");
  res.send("<h1> HOME </h1>");
});

app.post("/", (req, res) => {
  res.send("Request from post request");
});

app.get("/cats", (req, res) => {
  res.send("MEOW!!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOOF!!");
});

app.get("/r/:subreddit/:postID", (req, res) => {
  console.log(req.params);
  const { subreddit, postID } = req.params;

  res.send(`Browsing for ${subreddit} subreddit on ${postID}`);
});

app.get("/search", (req, res) => {
  console.log(req.query);
  const { q } = req.query;
  if (!q) {
    res.send("NOTHING FOUND IF NOTHING SEARCHED");
  } else {
    res.send(`Search result for ${req.query.q}`);
  }
});

app.get("*", (req, res) => {
  res.send(`Connect to the valid address`);
});

app.listen(port, () => {
  console.log("listening on port 3000");
});
