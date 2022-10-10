import { Router } from "express";

import fotoController from "../controllers/FotoController";

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;


// index -> Lista todos os usuários
// store/create -> cria um novo usuário
// delete -> apaga um usuário
// show -> mostra um usuário
// update -> atualiza um usuário
