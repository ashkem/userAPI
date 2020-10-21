const models = require("../models");
const { validateData } = require("../database/schema");
const { objToArray } = require("./helpers");

const getAllUsers = (req, res, next) => {
  var sql = "select * from user";
  var params = [];

  models.getUsers(sql, params, res);
};

const getUserById = (req, res, next) => {
  var sql = "select * from user where id = ?";
  var params = [req.params.id];

  models.getUser(sql, params, res);
};

const createNewUser = (req, res, next) => {
  const data = req.body;

  const sql =
    "INSERT INTO user (nombre, apellido, edad, email, telefono) VALUES (?,?,?,?,?)";

  //req.body obj values to array
  const params = objToArray(data);

  validateData(data)
    .then(() => {
      models.saveUser(sql, params, data, res);
    })
    .catch((err) => res.status(400).json({ error: err.errors }));
};

const updateUserById = (req, res, next) => {
  const data = req.body;
  const id = req.params.id;

  let sql =
    "UPDATE user set nombre = ?, apellido = ?, edad = ?,email = ?,telefono = ?WHERE id = ?";

  //req.body obj values to array
  const params = [...objToArray(data), id];

  validateData(data)
    .then(() => {
      models.updateUser(sql, params, data, res);
    })
    .catch((err) => res.status(400).json({ error: err.errors }));
};

const deleteUserById = (req, res, next) => {
  const sql = "DELETE FROM user WHERE id = ?";
  const params = req.params.id;

  models.deleteUser(sql, params, res);
};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
};
