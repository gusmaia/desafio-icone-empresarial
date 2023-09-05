import connection from "./connection";

export const clienteModel_getAll = async () => {
    const [cliente] = await connection.execute('select * from empresa.vw_clientes');
    return cliente;
}