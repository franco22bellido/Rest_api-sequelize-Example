import Sequelize from 'sequelize';
import {keys} from '../keys.js';
//Sequelize en mayuscula llama a la biblioteca
//sequelize en minuscula llama a una instancia

//base de datos, nombre de usuario, clave, 
export const sequelize = new Sequelize(keys.database, keys.usernameDB, keys.passwordDB, {
    host: keys.host,
    dialect: "mysql"
});

