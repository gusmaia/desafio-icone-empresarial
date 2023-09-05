import express from "express";
import { clienteModel_getAll } from "../models/clienteModel";

export const clienteController_getAll = async (_: express.Request, res: express.Response) => {
    const cliente = await clienteModel_getAll();
    return res.status(200).json(cliente);
};