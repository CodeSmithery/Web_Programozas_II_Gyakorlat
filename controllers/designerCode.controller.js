const designerCode = require("../models/designerCode.model.js");

const createDesignerCode = async (req, res) => {
    console.log("Létrehozási kérelem érkezett:", req.body);
    try{
        const newDesignerCode = await designerCode.create(req.body);
        res.status(200).json({message: "Sikeresen létrehozva!", object: newDesignerCode});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getAllDesignerCodes = async (req, res) => {
    try{
        const _designerCodes = await designerCode.find({});
        res.status(200).json({object: _designerCodes});
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getSingleDesignerCode = async (req, res) => {
    try{
        const {id} = req.params;
        const _designerCode =await designerCode.findById(id);
        if (!_designerCode) {
            return res.status(404).json({message: "Nincs ilyen azonosítójú elem!", id: id});
        }
        res.status(200).json({object: _designerCode});
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

const modifyDesignerCode = async (req, res) => {
    try{
        const {id} = req.params;
        const toBeModified = await designerCode.findByIdAndUpdate(id, req.body);

        if(!toBeModified) {
            return res.status(404).json({message: "Nincs ilyen azonosító!", id: id});
        }
        const modified = await designerCode.findById(id);
        res.status(200).json({message: "Frissítve!", object: modified});
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

const deleteDesignerCode = async (req, res) => {
try{
        const {id} = req.params;
        const deleted =await designerCode.findByIdAndDelete(id);
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
    createDesignerCode,
    getAllDesignerCodes,
    getSingleDesignerCode,
    modifyDesignerCode,
    deleteDesignerCode
}