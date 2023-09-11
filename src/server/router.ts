import express from "express";
import { pessoaController_get, pessoaController_getAll, pessoaController_create, pessoaController_update, pessoaController_delete } from "./controllers/pessoaController";
import { clienteController_get, clienteController_getAll, clienteController_create, clienteController_update, clienteController_delete } from "./controllers/clienteController";

const router = express.Router();

router.get('/pessoas/:id', pessoaController_get);
router.get('/pessoas', pessoaController_getAll);
router.post('/pessoas', pessoaController_create);
router.put('/pessoas/:id', pessoaController_update)
router.delete('/pessoas/:id', pessoaController_delete);

router.get('/clientes/:id', clienteController_get);
router.get('/clientes', clienteController_getAll);
router.post('/clientes', clienteController_create);
router.put('/clientes/:id', clienteController_update)
router.delete('/clientes/:id', clienteController_delete);

export default router;