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

//
// pool
//   .query("SELECT * FROM articles")
//   .then((res) => articles = res.rows)
//   .catch((err) => console.error("Error executing query", err.stack));

// pool.connect((err, client, done) => {
//   if (err) throw err;
//   client.query("SELECT * FROM articles", [], (err, result) => {
//     done();
//     if (err)
//       throw err;
//
//    console.log(result.rows);
//   });
// });

// console.log(result.rows);

// app.get("/articles", (req, res) => {
//   pool.connect((err, client, done) => {
//     if (err) throw err;
//     client.query("SELECT * FROM articles", [], (err, result) => {
//       done();
//       if (err) throw err;
//       let articles = result.rows;
//       client.query(`SELECT * FROM comments`, [], (err2, result2) => {
//         if (err2) throw err2;
//         for (let article of articles) {
//           let c = [];
//           for (let comment of result2.rows) {
//             if (comment.article_id == article.id) c.push(comment);
//           }
//           articles.find((x) => x.id == article.id)["comments"] = c;
//         }
//         res.send(articles);
//       });
//     });
//   });
// });

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
