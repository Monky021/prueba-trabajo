const {Router} = require('express');
const { check } = require('express-validator');
const { getUsuarios, crearUsuarios } = require('../controllers/usuarioControllers');
const { validarCampos } = require('../middleware/validar-campos');


const router =  Router();

router.get('/', getUsuarios);
router.post('/',[
    check('nombre', 'Nombre es obligatorio').not().isEmpty(),
    validarCampos
] ,crearUsuarios);




module.exports= router;