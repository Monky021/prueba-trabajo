const { request, response } = require("express");

const Usuario = require('../models/usuario')


const getUsuarios = async(req = request, res= response) =>{


    try {
        const usuario = await Usuario.findAll();

        res.status(200).json({usuario})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Contacte al administrador'
        })
    }
}
const crearUsuarios = async(req = request, res= response) =>{

    const {body} = req;
    try {

        const usuarioVerificado = await Usuario.findOne({where:{nombre: body.nombre}});
        if(usuarioVerificado){
            return res.status(400).json({
                msg:'Este nombre no esta disponible'
            })
        }
        const usuario = new Usuario(body);
        await usuario.save();

        res.status(200).json({usuario});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Contacte al administrador'
        })
    }
}

module.exports={
    getUsuarios,
    crearUsuarios
}

