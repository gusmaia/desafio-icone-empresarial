import connection from "./connection";



export class clienteObj {
    id?: any;
    cnpj?: string;
    nome?: string;
    data_fundacao?: string;
    tipo?: number;
    telefone?: string;
    email?: string;
    cep?: string;
    logradouro?: string;
    numero?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
}

export const clienteModel_get = async (id: any) => {
    try {
        const [cliente] = await connection.execute('select * from vw_clientes where vw_clientes.id = ?', [id]);
        return cliente;
    } catch (error) {
        console.error(`Erro ao executar a consulta: ${error}`);
        return [error];
    }
};

export const clienteModel_getAll = async () => {
    try {
        const [cliente] = await connection.execute('select * from vw_clientes');
        return cliente;
    } catch (error) {
        console.error(`Erro ao executar a consulta: ${error}`);
        return [error];
    }
};

export const clienteModel_create = async (input: clienteObj) => {
    try {
        const { cnpj, nome, data_fundacao, tipo, telefone, email, cep, logradouro, numero, bairro, cidade, estado } = input;
        await connection.execute('call sp_insere_cliente(?,?,?,?,?,?,?,?,?,?,?,?)', [cnpj, nome, data_fundacao, tipo, telefone, email, cep, logradouro, numero, bairro, cidade, estado]);
        return {cnpj_cliente_alterado: cnpj};
    } catch (error) {
        console.error(`Erro ao executar a consulta: ${error}`);
        return [error];
    }
};

export const clienteModel_update = async (id:any, input: clienteObj) => {
    try {
        const { cnpj, nome, data_fundacao, tipo, telefone, email, cep, logradouro, numero, bairro, cidade, estado} = input;
        await connection.execute('call sp_edita_cliente(?,?,?,?,?,?,?,?,?,?,?,?,?)', [id, cnpj, nome, data_fundacao, tipo, telefone, email, cep, logradouro, numero, bairro, cidade, estado]);
        return {id_cliente_alterado: id};
    } catch (error) {
        console.error(`Erro ao executar a consulta: ${error}`);
        return [error];
    }
};

export const clienteModel_delete = async (id: any) => {
    try {
        const [cliente] = await connection.execute('call sp_deleta_cliente(?)', [id]);
        return cliente;
    } catch(error) {
        console.error(`Erro ao executar a consulta: ${error}`);
        return [error];
    }
}