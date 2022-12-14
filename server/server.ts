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

      res.send(result.rows);
      done();
    });
  });
});

app.get("/comments", (req, res) => {
  const article_id = req.query.id;
  pool.connect((err, client, done) => {
    if (err) throw err;
    client.query(
      `SELECT * FROM comments WHERE article_id = ${article_id}`,
      [],
      (err, result) => {
        if (err) throw err;
        res.send(result.rows);
        done();
      }
    );
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
