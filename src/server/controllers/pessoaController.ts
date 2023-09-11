import express from "express";
import { pessoaModel_get,pessoaModel_getAll, pessoaModel_create, pessoaModel_update, pessoaModel_delete} from "../models/pessoaModel";

export const pessoaController_get = async (req: express.Request,res: express.Response) => {
    const { id } = req.params
    const pessoa = await pessoaModel_get(id);
    return res.status(200).json(pessoa);
};

export const pessoaController_getAll = async (_: express.Request,res: express.Response) => {
    const pessoa = await pessoaModel_getAll();
    return res.status(200).json(pessoa);
};

export const pessoaController_create = async (req: express.Request, res: express.Response) => {
    const pessoa = await pessoaModel_create(req.body);
    return res.status(201).json(pessoa);
};

export const pessoaController_update = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    await pessoaModel_update(id, req.body);
    return res.status(204).json();
}

export const pessoaController_delete = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    await pessoaModel_delete(id);
    return res.status(204).json();
}