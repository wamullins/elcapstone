const Router = require("express").Router();
const controller = require("../controllers/sendLogController");

Router.get("/", controller.getSendLogs);
Router.post("/", controller.addSendLog);

Router.get("/:id", controller.getSendLogByID);
Router.put("/:id", controller.updateSendLogByID);
Router.delete("/:id", controller.deleteSendLogByID);

module.exports = Router;
