import { DUMMY, DUMMY_HEADER, categories } from "../const/const";

const express = require("express");
const cors = require("cors");
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "cxksvmdq",
  host: "mouse.db.elephantsql.com",
  database: "cxksvmdq",
  password: "L_iOJ28ZuXUxjow8-DSIQqroUb_nEE_H",
  port: 5432,
});

const app = express();
app.use(cors());
app.use(express.json());

// let articles;

// pool
//   .query("SELECT * FROM articles")
//   .then((res) => (articles = res.rows))
//   .catch((err) => console.error("Error executing query", err.stack));

// app.get("/", (req, res) => {
//   res.send(nesto);
// });

app.get("/articles", (req, res) => {
  pool.connect((err, client, done) => {
    if (err) throw err;
    client.query("SELECT * FROM articles", [], (err, result) => {
      done();
      if (err) {
        throw err;
      }
      res.send(result.rows);
    });
  });
});

// app.get("/articles", (req, res) => {
//   res.status(200);
//   res.send(DUMMY);
// });
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
