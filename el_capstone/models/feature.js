const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const featureSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        climbID: {
            type: Schema.Types.ObjectId,
            ref: "Climb",
        },
        description: {
            type: String,
            required: true,
        },
        images: {
            type: [],
        },
        camera: {
            type: {},
        },
        highlight: {
            type: {},
        },
    },
    { timestamps: true }
);

module.exports = mongoose.models.Feature || mongoose.model("Feature", featureSchema);
