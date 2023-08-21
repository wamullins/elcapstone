const express = require("express");
const Router = express.Router();
const passport = require("passport");

const ClimbRouter = require("./climbRouter");
const FeatureRouter = require("./featureRouter");
const UserRouter = require("./userRouter");
const SendLogRouter = require("./sendLogRouter");

Router.use("/climbs", ClimbRouter);
Router.use("/features", FeatureRouter);
Router.use("/users", UserRouter);
Router.use("/sendLogs", SendLogRouter);

/// --- OAuth things tabled for later ---
// Router.get(
//     "/auth/google",
//     passport.authenticate(
//         // Which passport strategy is being used?
//         "google",
//         {
//             // Requesting the user's profile and email
//             scope: ["profile", "email"],
//             // Optionally force pick account every time
//             // prompt: "select_account"
//         }
//     )
// );
// Router.get(
//     "/oauth2callback",
//     passport.authenticate("google", {
//         successRedirect: "/climbs",
//         failureRedirect: "/climbs",
//     })
// );
// // OAuth logout route
// Router.get("/logout", function (req, res) {
//     req.logout(function () {
//         res.redirect("/climbs");
//     });
// });

module.exports = Router;
