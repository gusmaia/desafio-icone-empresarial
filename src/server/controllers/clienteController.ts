import express from "express";
import { clienteModel_getAll, clienteModel_create, clienteModel_update, clienteModel_delete } from "../models/clienteModel";

export const clienteController_getAll = async (_: express.Request, res: express.Response) => {
    const cliente = await clienteModel_getAll();
    return res.status(200).json(cliente);
};

export const clienteController_create = async (req: express.Request, res:express.Response) => {
    const cliente = await clienteModel_create(req.body);
    return res.status(201).json(cliente);
};

export const clienteController_update = async (req: express.Request, res:express.Response) => {
    const { id } = req.params;
    await clienteModel_update(id, req.body);
    return res.status(204).json();
};

export const clienteController_delete = async (req: express.Request, res:express.Response) => {
    const { id } = req.params;
    await clienteModel_delete(id);
    return res.status(204).json();
};