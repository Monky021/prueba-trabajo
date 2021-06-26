const { Sequelize } = require('sequelize');


const db = new Sequelize(process.env.DBNOMBRE, process.env.DBUSUARIO, process.env.DBPASSWORD, {
    host:'localhost',
    dialect:'postgres'

});


module.exports= db;