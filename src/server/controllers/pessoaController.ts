import express from "express";
import pessoaModel_getAll from "../models/pessoaModel";

const pessoaController_getAll = async (_: express.Request,res: express.Response) => {
    const [pessoa] = await pessoaModel_getAll();
    return res.status(200).json(pessoa);
};

export default pessoaController_getAll;