const { Schema } = require("mongoose");

const climbSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        grade: {
            type: String,
            required: true,
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

module.exports = climbSchema;
