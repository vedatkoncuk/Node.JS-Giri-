const express = require("express");
const app = express();

// routes

app.use("/products/:id/:price", function (req, res) {
  res.sendFile("product details" + req.params.id);
})

app.use("/products", function (req, res) {
  res.send("products");
})

app.use("/", function (req, res) {
  res.send("anasayfa");
})

app.listen(3000, () => {
  console.log("listening go port 3000")
})
