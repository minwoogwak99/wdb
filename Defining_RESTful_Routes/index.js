const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("HOME");
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  console.log(req.body);
  const meat = req.body.meat;
  const qtty = req.body.qty;
  console.log(`Here is your ${qtty} ${meat} tacos!`);
  res.send(`Here is your ${qtty} ${meat} tacos!`);
});

app.listen(3000, () => {
  console.log("listen on port 3000");
});
