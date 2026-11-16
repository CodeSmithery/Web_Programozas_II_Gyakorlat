const materialCode = require("../models/materialCode.model.js");

const createMaterialCode = async (req, res) => {
    console.log("Létrehozási kérelem érkezett:", req.body);
    try{
        const newAkod = await materialCode.create(req.body);
        res.status(200).json({message: "Sikeresen létrehozva!", object: newAkod});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getAllMaterialCodes = async (req, res) => {
    try{
        const materialCodes = await materialCode.find({});
        res.status(200).json(materialCodes);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getSingleMaterialCode = async (req, res) => {
    try{
        const {id} = req.params;
        const _materialCode =await materialCode.findById(id);
        if (!_materialCode) {
            return res.status(404).json({message: "Nincs ilyen azonosítójú elem!", id: id});
        }
        res.status(200).json({object: _materialCode});
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

const modifyMaterialCode = async (req, res) => {
    try{
        const {id} = req.params;
        const toBeModified = await materialCode.findByIdAndUpdate(id, req.body);

        if(!toBeModified) {
            return res.status(404).json({message: "Nincs ilyen azonosító!", id: id});
        }
        const modified = await materialCode.findById(id);
        res.status(200).json({message: "Frissítve!", object: modified});
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

const deleteMaterialCode = async (req, res) => {
try{
        const {id} = req.params;
        const deleted =await material.findByIdAndDelete(id);
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
    createMaterialCode,
    getAllMaterialCodes,
    getSingleMaterialCode,
    modifyMaterialCode,
    deleteMaterialCode
}