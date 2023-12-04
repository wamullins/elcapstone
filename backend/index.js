require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const passport = require("passport");
const Router = require("./routes/AppRouter");
const bodyParser = require("body-parser");
const db = require("./db");
require("./config/passport");

// require() imports and middleware here ^ ///////

const corsOptions = {
    origin: "*",
    methods: "GET,PUT,POST,DELETE",
    // allowedHeaders: "Content-Type,Authorization",
};

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(
    session({
        // secret: process.env.SECRET,
        secret: "ElCapRocks",
        resave: false,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});

app.use("/", Router);

// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
