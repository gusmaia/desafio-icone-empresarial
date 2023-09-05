import express from "express";
import {pessoaModel_getAll, pessoaModel_insert, pessoaObj} from "../models/pessoaModel";

export const pessoaController_getAll = async (_: express.Request,res: express.Response) => {
    const pessoa = await pessoaModel_getAll();
    return res.status(200).json(pessoa);
};

export const pessoaController_insert = async (req: express.Request, res: express.Response) => {
    await pessoaModel_insert(req.body);
    return res.status(201).json(req.body);
};