import { Router } from "express";
import {createPersona, deletePersona, getMacotasDePersona, getPersona, getPersonas, updatePersona} from '../controllers/personas_controller.js';
const router = Router();

router.get('/personas', getPersonas);

router.post('/personas', createPersona);

router.put('/personas/:id', updatePersona);

router.delete('/personas/:id', deletePersona);

router.get('/personas/:id', getPersona);

router.get('/personas/:id/mascotas', getMacotasDePersona);


export default router;