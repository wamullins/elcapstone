const mongoose = require("mongoose");
const climbSchema = require("./climb");
const featureSchema = require("./feature");
const userSchema = require("./user");
const sendLogSchema = require("./sendLog");

////
const Climb = mongoose.model("Climb", climbSchema);
const Feature = mongoose.model("Feature", featureSchema);
const User = mongoose.model("User", userSchema);
const SendLog = mongoose.model("SendLog", sendLogSchema);

module.exports = { Climb, Feature, User, SendLog };
