const { request, response } = require("express");

const Pregunta = require('../models/pregunta');



const getPreguntas = async(req= request, res=response) =>{


    const preguntas = await Pregunta.findAll();

    res.json({preguntas});
}

const getPregunta = async(req= request, res=response) =>{

    const {id} = req.params;

    const pregunta = await Pregunta.findByPk(id);
    if(!pregunta){
        return res.status(404).json({
            msg:'Esta pregunta no existe'
        });
    }

    res.status(200).json(pregunta);
}




const crearPreguntas = async(req= request, res=response) =>{



    try {
        
        const pregunta = new Pregunta(req.body)
        await pregunta.save();
        res.json({
        
            data:{
                pregunta
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Contacte al administrador'
        })
    }

    
}

const actualizarPreguntas = async(req= request, res=response) =>{

    const {id} = req.params;
    const {body} = req;
    try {
        //Verificar que la pregunta exista
        const pregunta = await Pregunta.findByPk(id)

        if(!pregunta){
            return res.status(404).json({
                msg:'La pregunta no esta en nuestra base de datos'
            })
        }

        await pregunta.update(body);
        res.json({
        
            data:{
                pregunta
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Contacte al administrador'
        })
    }
}

const eliminarPreguntas = (req= request, res=response) =>{
    res.json({
        msg:'eliminar preguntas '
    });
}


module.exports= {
    getPreguntas,
    getPregunta,
    crearPreguntas,
    actualizarPreguntas,
    eliminarPreguntas
}