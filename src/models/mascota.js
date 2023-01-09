import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';
export const mascota = sequelize.define('mascotas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    nombre: {
        type: DataTypes.STRING
        //defaultValue: "", => para darle un valor por defecto
    }
},{
    timestamps: false
});

