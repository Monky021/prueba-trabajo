
const { request, response } = require("express");
const Tematica = require('../models/tematica')

const getTematica = async(req= request, res= response) => {

    try {
        const tematica = await Tematica.findAll();
    
        res.status(200).json(tematica)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Contacte el administrador'
        })
    }
}

const crearTematica = async(req=request, res= response) => {

    const {body} = req;
    try {
        const tematica = new Tematica(body);
        
        await tematica.save();
    
        res.status(200).json(tematica);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Contacte el administrador'
        })
    }

}



module.exports ={

    getTematica,
    crearTematica
}