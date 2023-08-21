const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const climbSchema = new Schema(
    {
        name: {
            type: String,
        },
        type: {
            type: String,
        },
        grade: {
            type: String,
        },
        description: {
            type: String,
        },
        pitches: {
            type: Number,
        },
        length: {
            type: Number,
        },
        images: {
            type: [],
        },
        camera: {
            type: {},
        },
        points: {
            type: [],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.models.Climb || mongoose.model("Climb", climbSchema);
