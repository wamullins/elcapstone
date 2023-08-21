const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = mongoose.models.SendLog || mongoose.model("SendLog", sendLogSchema);
