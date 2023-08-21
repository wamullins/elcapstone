const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        googleId: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
        },
        gradePB: String,
        avatar: String,
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
