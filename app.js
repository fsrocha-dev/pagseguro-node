const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/payment", async (req, res) => {
  return res.send("OK");
});

app.listen(3000, () =>
  console.log(`Express Rodando... env: ${process.env.NODE_ENV}`)
);
