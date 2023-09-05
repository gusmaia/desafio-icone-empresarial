import connection from "./connection";

export const pessoaModel_getAll = async () => {
    const [pessoa] = await connection.execute('select * from empresa.vw_pessoas');
    return pessoa;
};

export class pessoaObj {
    cpf?: string;
    nome?: string;
    data_nascimento?: string;
    telefone?: string;
    email?: string;
};



export const pessoaModel_insert = async (input: pessoaObj) => {
    const { cpf, nome, data_nascimento, telefone, email } = input;
    const [pessoa] = await connection.execute('call sp_insere_pessoa(?,?,?,?,?)', [cpf, nome, data_nascimento, telefone, email]);
    return pessoa;
};