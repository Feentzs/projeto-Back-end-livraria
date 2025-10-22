import express from "express"
import {
    listarUsuarios,
    obterUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
} from "../controllers/usuarios.controllers.js";

const router = express.Router();

router.get("/", listarUsuarios);
router.get("/:id", obterUsuarioPorId);
router.post("/", criarUsuario);
router.put("/:id", atualizarUsuario);
router.delete("/:id", deletarUsuario);

export default router;