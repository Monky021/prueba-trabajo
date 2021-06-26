const {Model, DataTypes} = require('sequelize');
const db= require('../database/configDB');

class Usuario extends Model {}

Usuario.init({
    nombre: DataTypes.STRING,
},{
    sequelize: db, 
    modelName: 'usuario'
});

module.exports= Usuario;

// const Usuario = db.define('Usuario',{
//     nombre:{
//         type: DataTypes.STRING
//     },
//     idreguntas: {
//         type: DataTypes.INTEGER,
        
//     }

// }) 

// module.exports=Usuario;
