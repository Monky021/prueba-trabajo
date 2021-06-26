const {DataTypes, Model} = require('sequelize');
const  db  = require('../database/configDB');


class Respuesta extends Model {}

Respuesta.init({
    
    respuesta: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'respuesta'
})
// const Respuesta = db.define('Respuesta', {
//     respuesta: {
//         type=DataTypes.TEXT,

//     },
//     idRespuesta: {
//         type:DataTypes.INTEGER
//     }
// });

module.exports=Respuesta;