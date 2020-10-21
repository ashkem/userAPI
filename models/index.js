const db = require("../database");

const { ifError, ifErrorWithEmail } = require("./helpers");

const getUsers = (sql, params, res) => {
  db.all(sql, params, (err, rows) => {
    ifError(err, res);

    res.json({
      message: "success",
      data: rows,
    });
  });
};

const getUser = (sql, params, res) => {
  db.get(sql, params, (err, row) => {
    ifError(err, res);

    if (row === undefined) {
      res.json({
        message: "No se ha encontrado el usuario",
      });
    } else {
      res.json({
        message: "success",
        data: row,
      });
    }
  });
};

const saveUser = (sql, params, data, res) => {
  db.run(sql, params, (err, result) => {
    ifErrorWithEmail(err, res);

    res.json({
      message: "success",
      data,
    });
  });
};

const updateUser = (sql, params, data, res) => {
  db.run(sql, params, (err, result) => {
    ifErrorWithEmail(err, res);

    res.json({
      message: "success",
      data: data,
    });
  });
};

const deleteUser = (sql, params, res) => {
  db.run(sql, params, function (err, result) {
    ifError(err, res);

    res.json({ message: "deleted", changes: this.changes });
  });
};

module.exports = {
  getUsers,
  getUser,
  saveUser,
  updateUser,
  deleteUser,
};
