const routes = require("express").Router();

const controllers = require("../controllers");

routes.get("/api/users", controllers.getAllUsers);

routes.get("/api/user/:id", controllers.getUserById);

routes.post("/api/user/", controllers.createNewUser);

routes.patch("/api/user/:id", controllers.updateUserById);

routes.delete("/api/user/:id", controllers.deleteUserById);

module.exports = routes;
