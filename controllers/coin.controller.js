const coin = require("../models/coin.model.js");

const createCoin = async (req, res) => {
    console.log("Létrehozási kérelem érkezett:", req.body);
    try{
        const newCoin = await coin.create(req.body);
        res.status(200).json({message: "Sikeresen létrehozva!", object: newCoin});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getAllCoins = async (req, res) => {
    try{
        const coins = await coin.find({});
        res.status(200).json(coins);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getSingleCoin = async (req, res) => {
    try{
        const {id} = req.params;
        const _coin =await coin.findById(id);
        if (!_coin) {
            return res.status(404).json({message: "Nincs ilyen azonosítójú elem!", id: id});
        }
        res.status(200).json({object: _coin});
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

const modifyCoin = async (req, res) => {
    try{
        const {id} = req.params;
        const toBeModified = await coin.findByIdAndUpdate(id, req.body);

        if(!toBeModified) {
            return res.status(404).json({message: "Nincs ilyen azonosító!", id: id});
        }
        const modified = await coin.findById(id);
        res.status(200).json({message: "Frissítve!", object: modified});
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

const deleteCoin = async (req, res) => {
    try{
        const {id} = req.params;
        const deleted =await coin.findByIdAndDelete(id);
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
    createCoin,
    getAllCoins,
    getSingleCoin,
    modifyCoin,
    deleteCoin
}