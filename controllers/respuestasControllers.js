const { request, response } = require("express");

const Respuesta = require('../models/respuesta');



const getRespuesta = async (req = request, res = response) => {

    const respuesta = await Respuesta.findAll();


    res.json({ respuesta });
}

const crearRespuesta = async (req = request, res = response) => {

    const { body } = req;
    try {
        const respuesta = new Respuesta(body);

        await respuesta.save();

        res.status(200).json(respuesta);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contacte al administrador'
        })
    }
}

const actualizarRespuesta = async (req = request, res = response) => {

    const { id } = req.params;
    const { body } = req;
    try {
        const respuesta = await Respuesta.findByPk(id);

        if (!respuesta) {
            return res.status(400).json({
                msg: 'La respuesta no se encuetra en la BD'
            })
        }

        await respuesta.update(body)

        res.status(200).json({ respuesta });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contacte a su administrador'
        })
    }
}

const eliminarRespuestas = async (req = request, res = response) => {

    const { id } = req.params;


    const respuesta = await Respuesta.findByPk(id);

    if (!respuesta) {
        return res.status(400).json({
            msg: 'La respuesta no se encuetra en la BD'
        })
    }

    await respuesta.destroy()


    res.json(respuesta);
}


module.exports = {
    getRespuesta,
    crearRespuesta,
    actualizarRespuesta,
    eliminarRespuestas
}