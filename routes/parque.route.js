import { Router } from "express";
import { registroParque, listarParques, eliminarParque, actualizarParque } from "../controllers/parque.controller.js"

const router = Router();

router.post("/registro", registroParque)
router.get("/listar", listarParques)
router.delete("/eliminar", eliminarParque)
router.put("/actualizar", actualizarParque)

export default router;