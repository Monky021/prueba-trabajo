const {DataTypes, Model} = require('sequelize');
const  db  = require('../database/configDB');

class Tematica extends Model {}

Tematica.init({
    tematica: DataTypes.STRING
}, {
    sequelize:db,
    modelName:'tematica'
})



// const Tematica = db.define('Tematica', {
//     tematica: {
//         type=DataTypes.TEXT
//     }
    
// });

module.exports=Tematica;