const Router = require("express").Router();
const controller = require("../controllers/featureController");

Router.get("/", controller.getFeatures);
Router.post("/", controller.addFeature);

Router.get("/:id", controller.getFeatureByID);
Router.put("/:id", controller.updateFeatureByID);
Router.delete("/:id", controller.deleteFeatureByID);

module.exports = Router;
