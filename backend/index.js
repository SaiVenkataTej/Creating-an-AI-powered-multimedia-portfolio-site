const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Portfolio API");
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Contact Form Submission: Name=${name}, Email=${email}, Message=${message}`);
  res.status(200).send({ success: true, message: "Form submitted successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});