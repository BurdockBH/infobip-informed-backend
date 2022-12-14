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
app.use(express.static("public"));

app.get("/articles", (req, res) => {
  pool.connect((err, client, done) => {
    if (err) throw err;

    client.query("SELECT * FROM articles", [], (err, result) => {
      if (err) throw err;
      let articles = result.rows;
      client.query(
        `SELECT *
           FROM comments`,
        [],
        (err2, result2) => {
          if (err2) throw err2;
          for (let article of articles) {
            let c = [];
            for (let comment of result2.rows) {
              if (comment.article_id == article.id) c.push(comment);
            }
            articles.find((x) => x.id == article.id)["comments"] = c;
          }
          res.send(articles);
          done();
        }
      );
    });
  });
});

app.post("/new-comment", (req, res) => {
  pool.connect((err, client, done) => {
    if (err) throw err;
    const query = `INSERT INTO comments(content, time, article_id)
                   VALUES ('${req.body.content}', '${req.body.time}', ${req.body.article_id})`;
    if (err) throw err;
    client.query(query, [], (err) => {
      if (err) throw err;
      res.send({ message: "Comment inserted" });
      done();
    });
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
