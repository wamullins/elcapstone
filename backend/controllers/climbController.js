const { Climb } = require("../models");

const addClimb = async (req, res) => {
    try {
        const newClimb = new Climb(req.body);
        newClimb.save();
        return res.json(newClimb);
    } catch (e) {
        console.log(e);
        return res.send(e.message);
    }
};
const getClimbs = async (req, res) => {
    try {
        const climbs = await Climb.find({});
        console.log(climbs);
        return res.json(climbs);
    } catch (e) {
        console.log(e);
        return res.send(e.message);
    }
};
const getClimbByID = async (req, res) => {
    try {
        const climb = await Climb.findById(req.params.id);
        if (!climb) throw Error("Climb not found");
        return res.json(climb);
    } catch (e) {
        console.log(e);
        return res.send(e.message);
    }
};
const deleteClimbByID = async (req, res) => {
    try {
        const deletedClimb = await Climb.findByIdAndDelete(req.params.id);
        if (deletedClimb) {
            return res.json(deletedClimb);
        }
        return res.send("Climb ID Not Found");
    } catch (e) {
        console.log(e);
        res.send(e.message);
    }
};
const updateClimbByID = async (req, res) => {
    try {
        const updatedClimb = await Climb.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedClimb) {
            return res.json(updatedClimb);
        }
        return res.send("Climb ID Not Found");
    } catch (e) {
        console.log(e);
        res.send(e.message);
    }
};

module.exports = {
    addClimb,
    getClimbs,
    getClimbByID,
    deleteClimbByID,
    updateClimbByID,
};
