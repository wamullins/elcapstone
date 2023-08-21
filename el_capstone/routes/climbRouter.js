const Router = require("express").Router();
const controller = require("../controllers/climbController");

Router.get("/", controller.getClimbs);
Router.post("/", controller.addClimb);

Router.get("/:id", controller.getClimbByID);
Router.put("/:id", controller.updateClimbByID);
Router.delete("/:id", controller.deleteClimbByID);

module.exports = Router;
