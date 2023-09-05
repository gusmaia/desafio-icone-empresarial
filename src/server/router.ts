import express from "express";
import {pessoaController_getAll, pessoaController_insert} from "./controllers/pessoaController";
import { clienteController_getAll } from "./controllers/clienteController";

const router = express.Router();

router.get('/pessoas', pessoaController_getAll);
router.post('/pessoas', pessoaController_insert);

router.get('/clientes', clienteController_getAll);

export default router;