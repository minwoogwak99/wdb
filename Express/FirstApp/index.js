const express = require("express");
const app = express();
const port = 3000;

app.use((req, res) => {
  console.log("NEW REQUEST");
});

app.listen(port, () => {
  console.log("listening on port 3000");
});
