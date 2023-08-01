const { Schema } = require("mongoose");

const sendLogSchema = new Schema(
    {
        routeID: {
            type: Schema.Types.ObjectId,
            ref: "Climb",
            required: true,
        },
        userID: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        grade: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = sendLogSchema;
