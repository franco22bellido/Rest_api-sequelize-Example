import { mascota } from "../models/mascota.js";

export const getMascotaById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await mascota.findOne({
            where: { id },
            attributes: ['nombre']//solo quiero retornar el campo nombre
        })
        res.json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }

}
export const getMascotas = async (req, res) => {
    try {
        const mascotas = await mascota.findAll();
        res.json(mascotas);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
export const createMascota = async (req, res) => {
    try {
        const { nombre, persona_id_fk } = req.body;

        const newMascota = await mascota.create({
            nombre,
            persona_id_fk
        });

        res.json(newMascota);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
export const deleteMascotasById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await mascota.destroy({
            where: { id }
        })
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
export const updateMascotasById = async (req, res) => {
    const { id } = req.params;

    try {
        const updateMascota = await mascota.findOne({
            where: {id}
        });
        updateMascota.set(req.body)  //el metodo set solo cambia los campos que tienen algo
        await updateMascota.save();
        return res.status(200).json(updateMascota);
    } catch (error) {
        res.status(500).json(error.message);
    }
}