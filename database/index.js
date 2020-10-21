var sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE user (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre text,
          apellido text,
          edad number,
          email text UNIQUE, 
          telefono text,
          CONSTRAINT email_unique UNIQUE (email)
          )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO user (nombre, apellido, edad, email, telefono) VALUES (?,?,?,?,?)";
          db.run(insert, [
            "asdf",
            "qwerqwer",
            "20",
            "email1@email.com",
            "12345679",
          ]);
          db.run(insert, [
            "zxcv",
            "vbnmbnm",
            "25",
            "email2@email.com",
            "9875654321",
          ]);
        }
      }
    );
  }
});

module.exports = db;
