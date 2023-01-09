import app from './app.js';
import { sequelize } from './database/database.js';
import { keys } from './keys.js';

//se importan solamente cuando creamos tablas
//import './models/persona.js';
//import './models/mascota.js';

async function main() {
    try {
        //sync por defecto trata de crear tablas si no existen.
        //podemos cambiar la estrategia de generación de tablas pasandole
        //un objeto por parametros.
        // donde {force: true} recrea las tablas.
        // y {alter: true} altera la tabla si tiene alguna reestructuración
        await sequelize.sync({force : false});
        
        await sequelize.authenticate();
        console.log("la conexion ha sido establecida");

        app.listen(keys.serverPort, () => {
            
            
            console.log("server on port: "+keys.serverPort);
        });
    } catch (error) {
        console.log("unable to connect to the database");
    }


};

main();
