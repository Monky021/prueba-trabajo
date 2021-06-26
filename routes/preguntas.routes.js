const { Router } = require('express');
const {check} =require('express-validator');

const { getPreguntas, crearPreguntas, actualizarPreguntas, eliminarPreguntas, getPregunta } = require('../controllers/preguntasControllers');
const { validarCampos } = require('../middleware/validar-campos');


const router = Router();

router.get('/', getPreguntas );
router.get('/:id', getPregunta );


router.post('/',[
    check('pregunta', 'La pregunta es obligatoria').not().isEmpty(),
    validarCampos
], crearPreguntas )
router.put('/:id', actualizarPreguntas )
router.delete('/:id', eliminarPreguntas)




module.exports= router;