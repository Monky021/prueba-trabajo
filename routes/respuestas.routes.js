const { Router } = require('express');
const { check } = require('express-validator');
const { getRespuesta, crearRespuesta, actualizarRespuesta, eliminarRespuestas } = require('../controllers/respuestasControllers');
const { validarCampos } = require('../middleware/validar-campos');


const router = Router();

router.get('/', getRespuesta);

router.post('/', [
    check('respuesta', 'Debe dar una respuesta valida').not().isEmpty(),
    validarCampos
],crearRespuesta )
router.put('/:id', actualizarRespuesta)
router.delete('/:id', eliminarRespuestas)




module.exports= router;