const mongoose = require("mongoose");

mongoose
    // .connect("mongodb://127.0.0.1:27017/ElCapDB")
    // .connect(process.env.DATABASE_URL)
    .connect(
        "mongodb+srv://mullinsa428:JdO7J6WfEJB01HWw@elcap.4x5lyjz.mongodb.net/el-capstone?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Successfully connected to MongoDB.");
    })
    .catch((e) => {
        console.error("Connection error", e.message);
    });

const db = mongoose.connection;

module.exports = db;
