const { User } = require("../models");

// const addUser = async (req, res) => {
//     try {
//         const newUser = new User(req.body);
//         newUser.save();
//         return res.json(newUser);
//     } catch (e) {
//         console.log(e);
//         return res.send(e.message);
//     }
// };

const addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        newUser.save();
        return res.json(newUser);
    } catch (e) {
        console.log(e);
        return res.send(e.message);
    }
};
// take password out of request body,

// const getUsers = async (req, res) => {
//     try {
//         const users = await User.find({});
//         console.log(users);
//         return res.json(users);
//     } catch (e) {
//         console.log(e);
//         return res.send(e.message);
//     }
// };

const getUserByID = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) throw Error("user not found");
        return res.json(user);
    } catch (e) {
        console.log(e);
        return res.send(e.message);
    }
};

const getUsers = async (req, res) => {
    try {
        if (req.query.name) {
            const user = await User.find({ name: req.query.name });
            if (!user) throw Error("user not found");
            return res.json(user);
        } else if (req.query.email) {
            const user = await User.find({ email: req.query.email });
            if (!user) throw Error("user not found");
            return res.json(user);
        } else {
            const users = await User.find({});
            console.log(users);
            return res.json(users);
        }
    } catch (e) {
        console.log(e);
        return res.send(e.message);
    }
};

const getUserEmails = async (req, res) => {
    try {
        const users = await User.find({}, { email: 1 });
        console.log(users);
        return res.json(users);
    } catch (e) {
        console.log(e);
        return res.send(e.message);
    }
};

const deleteUserByID = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (deletedUser) {
            return res.json(deletedUser);
        }
        return res.send("User ID Not Found");
    } catch (e) {
        console.log(e);
        res.send(e.message);
    }
};
const updateUserByID = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedUser) {
            return res.json(updatedUser);
        }
        return res.send("User ID Not Found");
    } catch (e) {
        console.log(e);
        res.send(e.message);
    }
};

module.exports = {
    addUser,
    getUsers,
    getUserEmails,
    getUserByID,
    deleteUserByID,
    updateUserByID,
};
