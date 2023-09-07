import connection from "./connection";

export const pessoaModel_getAll = async () => {
    try {
        const [pessoa] = await connection.execute('select * from empresa.vw_pessoas');
        return pessoa;
    } catch (error) {
        console.error(`Erro ao executar a consulta: ${error}`);
        return [error];
    }
};

class pessoaObj {
    id?: any;
    cpf?: string;
    nome?: string;
    data_nascimento?: string;
    telefone?: string;
    email?: string;
};

export const pessoaModel_create = async (input: pessoaObj) => {
    const { cpf, nome, data_nascimento, telefone, email } = input;
    try {
        await connection.execute('call sp_insere_pessoa(?,?,?,?,?)', [cpf, nome, data_nascimento, telefone, email]);
        return {cpf_pessoa_cadastrada: cpf};
    } catch(error) {
        console.error(`Erro ao executar a consulta: ${error}`);
        return [error];
    };
};

export const pessoaModel_update = async (id:any, input: pessoaObj) => {
    const { cpf, nome, data_nascimento, telefone, email } = input;
    try {
        await connection.execute('update pessoa set cpf = ?, nome = ?, data_nascimento = ?, telefone = ?, email = ? where id = ?', [cpf, nome, data_nascimento, telefone, email, id])
        return {cpf_pessoa_alterada: cpf};
    } catch(error) {
        console.log(`Erro ao executar a consulta: ${error}`);
        return[error];
    }
};

export const pessoaModel_delete = async (id: any) => {
    try {
        const [pessoa] = await connection.execute('delete from pessoa where pessoa.id = ?', [id]);
        return pessoa;
    } catch(error) {
        console.error(`Erro ao executar a consulta: ${error}`);
        return [error];
    };
};