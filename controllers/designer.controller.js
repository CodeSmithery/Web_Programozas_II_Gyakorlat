const designer = require("../models/designer.model.js");

const createDesigner = async (req, res) => {
    console.log("Létrehozási kérelem érkezett:", req.body);
    try{
        const newDesigner = await designer.create(req.body);
        res.status(200).json({message: "Sikeresen létrehozva!", object: newDesigner});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getAllDesigners = async (req, res) => {
    try{
        const designers = await designer.find({});
        res.status(200).json(designers);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getSingleDesigner = async (req, res) => {
    try{
        const {id} = req.params;
        const _designer =await designer.findById(id);
        if (!_designer) {
            return res.status(404).json({message: "Nincs ilyen azonosítójú elem!", id: id});
        }
        res.status(200).json({object: _designer});
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

const modifyDesigner = async (req, res) => {
    try{
        const {id} = req.params;
        const toBeModified = await designer.findByIdAndUpdate(id, req.body);

        if(!toBeModified) {
            return res.status(404).json({message: "Nincs ilyen azonosító!", id: id});
        }
        const modified = await designer.findById(id);
        res.status(200).json({message: "Frissítve!", object: modified});
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

const deleteDesigner = async (req, res) => {
    try{
        const {id} = req.params;
        const deleted =await designer.findByIdAndDelete(id);
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
    createDesigner,
    getAllDesigners,
    getSingleDesigner,
    modifyDesigner,
    deleteDesigner
}