const express = require("express");
const router = express.Router();
const sql = require("mysql2");

router.post("/playlist", (req, res) => {
  const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "musicdb",
  });

  console.log(req.body);
  db.query(
    "INSERT INTO playlists (title, song, username, ispublic) VALUES (?, ?, ?, ?);",
    [req.body.title, req.body.songs, req.body.username, req.body.public],
    (err, data) => {
      console.log(err);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

router.post("/logininfo", (req, res) => {
  const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "musicdb",
  });

  console.log(req.body);
  db.query(
    "INSERT INTO userinfo (email, password, is_Admin, username) VALUES (?, ?, ?, ?);",
    [req.body.email, req.body.password, req.body.is_Admin, req.body.username],
    (err, data) => {
      console.log(err);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

router.post("/currentuser", (req, res) => {
  const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "musicdb",
  });

  console.log(req.body);
  db.query(
    "INSERT INTO currentuser (username) VALUES (?);",
    [req.body.username],
    (err, data) => {
      console.log(err);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});



router.post("/parsedData", (req, res) => {
  const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "musicdb",
  });

  console.log(req.body);
  db.query(
    "INSERT INTO track (track_duration, genre, track_name,album_id,album_title,artist_id,artist_name,track_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
    [
      req.body.track_duration,
      req.body.genre,
      req.body.track_name,
      req.body.album_id,
      req.body.album_title,
      req.body.artist_id,
      req.body.artist_name,
      req.body.track_id,
    ],
    (err, data) => {
      console.log(err);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

router.get("/recentPlaylists", (req, res) => {
  db.query(
    "SELECT * FROM playlists WHERE ispublic!=0 ORDER BY updatedAt DESC LIMIT 10",
    (err, data) => {
      console.log(data);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "musicdb",
});

router.get("/numuser", (req, res) => {
  db.query("SELECT COUNT(email) FROM userinfo", (err, data) => {
    console.log(data);
    if (err != null) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});


router.get("/currentuser1", (req, res) => {
  db.query(
    "SELECT * FROM currentuser ORDER BY time DESC LIMIT 1",
    (err, data) => {
      console.log(data);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});




router.get("/emailusername", (req, res) => {
  db.query("SELECT username FROM userinfo WHERE email="+req.query.name1, (err, data) => {
    console.log(data);
    if (err != null) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});





router.get("/username", (req, res) => {
  db.query("SELECT COUNT(email) FROM userinfo", (err, data) => {
    console.log(data);
    if (err != null) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});


const csv = require("csv-parser");
let tracks = [];
const fs = require("fs");

fs.createReadStream("raw_tracks.csv")
  .pipe(csv({}))
  .on("data", (data) => tracks.push(data))
  .on("end", () => {});

router.get("/trackinfo", (req, res) => {
  res.send(tracks);
});

module.exports = router;
