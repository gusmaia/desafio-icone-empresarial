import connection from "./connection";

const pessoaModel_getAll = async () => {
    const pessoa = await connection.execute('select * from empresa.vw_pessoas');
    return pessoa;
};

const pessoaModel_insert = async () => {
    const pessoa = await connection.execute('call sp');
}

export default pessoaModel_getAll;