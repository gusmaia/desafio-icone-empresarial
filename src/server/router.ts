import express from "express";
import pessoaController_getAll from "./controllers/pessoaController";

const router = express.Router();

router.get('/pessoas', pessoaController_getAll);

export default router;