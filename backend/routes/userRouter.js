const Router = require("express").Router();
const controller = require("../controllers/userController");

Router.get("/", controller.getUsers);
Router.post("/", controller.addUser);
Router.get("/emails", controller.getUserEmails);

Router.get("/:id", controller.getUserByID);
Router.put("/:id", controller.updateUserByID);
Router.delete("/:id", controller.deleteUserByID);

module.exports = Router;
