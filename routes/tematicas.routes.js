const {Router} = require('express');
const { check } = require('express-validator');
const { getTematica, crearTematica } = require('../controllers/TematicaControllers');
const { validarCampos } = require('../middleware/validar-campos');


const router = Router();


router.get('/', getTematica)

router.post('/',[
    check('tematica', 'La tematica es obligatoria').not().isEmpty(),
    validarCampos
] ,crearTematica);

module.exports= router;