import {DataTypes} from 'sequelize';
import { sequelize } from "../database/database.js";
import { mascota } from './mascota.js';

export const Persona = sequelize.define('personas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    ocupacion: {
        type: DataTypes.STRING
    }
}, {
    /*esta linea nos crea una fecha de cuando se hizo
    cada registro. por defecto viene en true*/
    timestamps: true
});

Persona.hasMany(mascota, {
    foreignKey: 'persona_id_fk',
    sourceKey: 'id'
});
mascota.belongsTo(Persona,{
    foreignKey: 'persona_id_fk',
    targetId: 'id'
});


