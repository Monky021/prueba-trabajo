const {DataTypes, Model} = require('sequelize');
const db  = require('../database/configDB');


class Pregunta extends Model {}
Pregunta.init({
    pregunta:{
        type:DataTypes.STRING,
        allowNull:true,
        validate:{
            len:[3,250]
            
        }
    },

}, {
    sequelize: db,
    modelName:'pregunta'
})
// const Pregunta = db.define('Pregunta', {
//     pregunta: {
//         type=DataTypes.STRING
//     },
//     idRespuesta: {
//         type:DataTypes.INTEGER
//     },
//     idTematica: {
//         type:DataTypes.INTEGER
//     }
// });

module.exports=Pregunta;