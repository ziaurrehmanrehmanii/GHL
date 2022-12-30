const express = require("express");
const serveless = require("serverless-http");
const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
// router.post("/", (req, res) => {
//   res.json({ message: "Hello World" });
// });

app.use("/.netlify/functions/api", router);
module.exports.handler = serveless(app);
