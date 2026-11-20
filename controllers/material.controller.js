const material = require("../models/material.model.js");

const createMaterial = async (req, res) => {
    console.log("Létrehozási kérelem érkezett:", req.body);
    try{
        const newmaterial = await material.create(req.body);
        res.status(200).json({message: "Sikeresen létrehozva!", object: newmaterial});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getAllMaterials = async (req, res, next) => {
    try{
        res.locals.materials = await material.find({});
        next();
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getSingleMaterial = async (req, res) => {
    try{
        const {id} = req.params;
        const _material =await material.findById(id);
        if (!_material) {
            return res.status(404).json({message: "Nincs ilyen azonosítójú elem!", id: id});
        }
        res.status(200).json({object: _material});
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

const modifyMaterial = async (req, res) => {
    try{
        const {id} = req.params;
        const toBeModified = await material.findByIdAndUpdate(id, req.body);

        if(!toBeModified) {
            return res.status(404).json({message: "Nincs ilyen azonosító!", id: id});
        }
        const modified = await material.findById(id);
        res.status(200).json({message: "Frissítve!", object: modified});
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

const deleteMaterial = async (req, res) => {
    try{
        const {id} = req.params;
        const deleted =await materialCode.findByIdAndDelete(id);
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
    createMaterial,
    getAllMaterials,
    getSingleMaterial,
    modifyMaterial,
    deleteMaterial
}