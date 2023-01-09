import { mascota } from '../models/mascota.js';
import {Persona} from '../models/persona.js';

export const getPersonas = async(req, res)=>{

    try {
            const personas = await Persona.findAll();
            res.json(personas);
        
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }

}
export const createPersona = async (req, res)=>{
    try {
        
            const {nombre, ocupacion} = req.body;
        
            const newPersona = await Persona.create({
                nombre,
                ocupacion
            })
            res.json(newPersona);
        
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }

}

export const updatePersona = async(req, res)=>{
    try {
        
        const {id} = req.params;
        const {nombre, ocupacion} = req.body;
        
        const persona = await Persona.findByPk(id); /*|| findOne*/
         persona.nombre = nombre;
         persona.ocupacion = ocupacion;

        //persona.set(req.body) esta es otra forma de cambiar los datos
        //tambien esta el metodo update()
        await persona.save();
        res.status(200).json(persona);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const deletePersona = async(req, res)=>{
    try {
        const {id} = req.params;
        await Persona.destroy({
            where: {
                id
            }
        });
        console.log(id);
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
}

export const getPersona = async(req, res)=>{
    try {
        const {id} = req.params;
        const persona = await Persona.findOne({
            where: {
                id
            }
        });
        if(!persona) return res.status(404).json({message: 'persona no encontrada'})
        res.json(persona);

    } catch (error) {
        res.status(500).json(
            error.message
        )
    }

};

export const getMacotasDePersona = async(req, res)=>{
    try {
        const {id}= req.params;
    const mascotas = await mascota.findAll({
        where: {persona_id_fk : id}
    });
    res.json(mascotas);
    } catch (error) {
        res.status(500).json(error.message);
    }
}