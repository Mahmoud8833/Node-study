/* Importing the express module. */
const express = require("express");
const app = express();

/* Importing the body-parser module. */
const bodyParser = require("body-parser");

/* Parsing the body of the request. */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

// Create JS object
const appData = {};
// Respond with JS object when a GET request is made to the homepage
app.get("/all", function (req, res) {
  res.send(appData);
});

const data = [];
app.post("/add", function (req, res) {
  console.log(req.body);
  data.push(req.body);
  res.send(data);
});

/* Telling the server to use the project folder as the root folder. */
app.use(express.static("website"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 3000;

app.listen(port, function () {
  console.log("Servre running...");
  console.log(`Running on port ${port}`);
});
