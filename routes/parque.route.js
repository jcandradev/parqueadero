import { Router } from "express";
import { registroParque } from "../controllers/parque.controller.js"

const router = Router();

router.post("/registro", registroParque);

export default router;