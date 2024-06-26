const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getMarkup", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/markup.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
