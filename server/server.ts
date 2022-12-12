const express = require("express");
const cors = require("cors");
import { DUMMY, DUMMY_HEADER, categories } from "../const/const";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/articles", (req, res) => {
  res.status(200);
  res.send(DUMMY);
});

app.get("/categories", (req, res) => {
  res.status(200);
  res.send(categories);
});

app.get("/head-article", (req, res) => {
  res.status(200);
  res.send(DUMMY_HEADER);
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
