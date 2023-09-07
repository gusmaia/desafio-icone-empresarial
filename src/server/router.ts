import express from "express";
import { pessoaController_getAll, pessoaController_create, pessoaController_update, pessoaController_delete } from "./controllers/pessoaController";
import { clienteController_getAll, clienteController_create, clienteController_update, clienteController_delete } from "./controllers/clienteController";

const router = express.Router();

router.get('/pessoas', pessoaController_getAll);
router.post('/pessoas', pessoaController_create);
router.put('/pessoas/update/:id', pessoaController_update)
router.delete('/pessoas/delete/:id', pessoaController_delete);

router.get('/clientes', clienteController_getAll);
router.post('/clientes', clienteController_create);
router.put('/clientes/update/:id', clienteController_update)
router.delete('/clientes/delete/:id', clienteController_delete);

export default router;