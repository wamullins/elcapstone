const Feature = require("../models/feature");

const addFeature = async (req, res) => {
    try {
        const newFeature = new Feature(req.body);
        newFeature.save();
        return res.json(newFeature);
    } catch (e) {
        console.log(e);
        return res.send(e.message);
    }
};
const getFeatures = async (req, res) => {
    try {
        if (req.query.climbID) {
            const features = await Feature.find({ climbID: req.query.climbID });
            if (!features) throw Error("features not found");
            return res.json(features);
        } else {
            const Features = await Feature.find({});
            console.log(Features);
            return res.json(Features);
        }
    } catch (e) {
        console.log(e);
        return res.send(e.message);
    }
};
const getFeatureByID = async (req, res) => {
    try {
        const feature = await Feature.findById(req.params.id);
        if (!feature) throw Error("Feature not found");
        return res.json(feature);
    } catch (e) {
        console.log(e);
        return res.send(e.message);
    }
};
const deleteFeatureByID = async (req, res) => {
    try {
        const deletedFeature = await Feature.findByIdAndDelete(req.params.id);
        if (deletedFeature) {
            return res.json(deletedFeature);
        }
        return res.send("Feature ID Not Found");
    } catch (e) {
        console.log(e);
        res.send(e.message);
    }
};
const updateFeatureByID = async (req, res) => {
    try {
        const updatedFeature = await Feature.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedFeature) {
            return res.json(updatedFeature);
        }
        return res.send("Feature ID Not Found");
    } catch (e) {
        console.log(e);
        res.send(e.message);
    }
};

module.exports = {
    addFeature,
    getFeatures,
    getFeatureByID,
    deleteFeatureByID,
    updateFeatureByID,
};
