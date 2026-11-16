const user = require("../models/user.model.js");

const createUser = async (req, res) => {
    console.log("Létrehozási kérelem érkezett:", req.body);
    try{
        const newUser = await user.create(req.body);
        res.status(200).json({message: "Sikeresen létrehozva!", object: newUser});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getAllUsers = async (req, res) => {
    try{
        const users = await user.find({});
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getSingleUser = async (req, res) => {
    try{
        const {id} = req.params;
        const _user = await user.findById(id);
        if (!_user) {
            return res.status(404).json({message: "Nincs ilyen azonosítójú elem!", id: id});
        }
        res.status(200).json({object: _user});
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

const modifyUser = async (req, res) => {
    try{
        const {id} = req.params;
        const toBeModified = await user.findByIdAndUpdate(id, req.body);

        if(!toBeModified) {
            return res.status(404).json({message: "Nincs ilyen azonosító!", id: id});
        }
        const modified = await user.findById(id);
        res.status(200).json({message: "Frissítve!", object: modified});
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

const deleteUser = async (req, res) => {
try{
        const {id} = req.params;
        const deleted =await user.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({message: "Nincs ilyen azonosítójú elem!", id: id});
        }
        res.status(200).json({message: "Sikeresen törölve!", object: deleted});
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getSingleUser,
    modifyUser,
    deleteUser
}