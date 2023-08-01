const mongoose = require("mongoose");

mongoose
    .connect(process.env.DATABASE_URL)

    .then(() => {
        console.log("Successfully connected to MongoDB.");
    })
    .catch((e) => {
        console.error("Connection error", e.message);
    });

const db = mongoose.connection;

module.exports = db;
