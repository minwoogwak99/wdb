const express = require("express");
const app = express();
const port = 3000;

app.use((req, res) => {
  console.log("NEW REQUEST");
  res.send("<h1>This is response from a server</h1>")
});

app.listen(port, () => {
  console.log("listening on port 3000");
});
