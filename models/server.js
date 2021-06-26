const express = require('express');
const cors = require('cors');
const db = require('../database/configDB');
require('../models/asociaciones');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.respuestaPath = '/api/foro/respuesta';
        this.preguntaPath = '/api/foro/pregunta';
        this.usuarioPath = '/api/foro/usuario';
        this.tematicaPath = '/api/foro/tematica';
        //Conectar base de datos
        this.connectionDB();
        //Middlewares
        this.middlewares();
        
        //Rutas de mi servidor
        this.routes();
        
    }
    async connectionDB(){
        try {
            await db.sync({force: false});
            console.log('****************************************************************');
            console.log('----------------------------------------------------------------');
            console.log('****************************************************************');

            console.log('La base de datos esta conectada!');
            

        } catch (error) {
            throw new Error(error)
        }
    }

    middlewares(){
        //Cors
        this.app.use(cors());
        //Parceo del body 
        this.app.use( express.json() );
        //Directorio publico
        this.app.use(express.static('public'));
        
    }



    routes(){
        this.app.use(this.preguntaPath, require('../routes/preguntas.routes'));
        this.app.use(this.respuestaPath, require('../routes/respuestas.routes'));
        this.app.use(this.usuarioPath, require('../routes/usuarios.routes'));
        this.app.use(this.tematicaPath, require('../routes/tematicas.routes'));
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Rest Server esta corriendo en el http://localhost:${this.port}`);
            
        })
    }
}


module.exports = Server;