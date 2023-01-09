import { Router } from "express";
import { createMascota, deleteMascotasById, getMascotaById, getMascotas, updateMascotasById } from '../controllers/mascotas_controller.js';
const router = Router();

router.get('/mascotas', getMascotas);
router.post('/mascotas', createMascota);
router.put('/mascotas/:id', updateMascotasById);
router.get('/mascotas/:id', getMascotaById);
router.delete('/mascotas/:id', deleteMascotasById);


export default router;