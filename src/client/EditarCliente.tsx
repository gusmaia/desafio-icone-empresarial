import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import InputMask from "react-input-mask"
import { clienteObj } from "../server/models/clienteModel"



function EditarCliente() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [cliente, setCliente] = useState<clienteObj>({
        cnpj: '',
        nome: '',
        data_fundacao: '',
        tipo: 0 || 1,
        telefone: '',
        email: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: ''
    })
    const [error, setError] = useState<any>()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`http://localhost:3000/clientes/${id}`)
            setCliente({...cliente, ...res.data[0]})
          } catch (error) {
            setError(error)
          }
        }
    
        fetchData()
      }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCliente({
          ...cliente,
          [name]: value,
        });
      };

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          await axios.put(`http://localhost:3000/clientes/${id}`, cliente);
          alert('Cliente salvo com sucesso!');
          navigate('/')
        } catch (error) {
          console.error('Erro ao salvar o cliente:', error);
          alert('Ocorreu um erro ao salvar o cliente. Verifique o console para mais detalhes.');
        }
      };

      return (
        <div className="container mt-4">
      <h1 className="text-primary mb-4">Formulário de Cliente</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cnpj">CNPJ:</label>
          <InputMask
            mask="99.999.999/9999-99"
            type="text"
            id="cnpj"
            name="cnpj"
            value={cliente.cnpj}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={cliente.nome}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="data_fundacao">Data de Fundação:</label>
          <input
            type="date"
            id="data_fundacao"
            name="data_fundacao"
            value={cliente.data_fundacao}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tipo">Tipo:</label>
          <select
            name="tipo"
            id="tipo"
            onChange={() => handleChange}
            value={cliente.tipo}
            className="form-control"
            required
          >
            <option value="0">Regular</option>
            <option value="1">Avulso</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <InputMask
            mask="(99) 9999-9999"
            type="text"
            id="telefone"
            name="telefone"
            value={cliente.telefone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cep">CEP:</label>
          <InputMask
            mask="99999-999"
            type="text"
            id="cep"
            name="cep"
            value={cliente.cep}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="logradouro">Logradouro:</label>
          <input
            type="text"
            id="logradouro"
            name="logradouro"
            value={cliente.logradouro}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numero">Número:</label>
          <input
            type="text"
            id="numero"
            name="numero"
            value={cliente.numero}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bairro">Bairro:</label>
          <input
            type="text"
            id="bairro"
            name="bairro"
            value={cliente.bairro}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            value={cliente.cidade}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="estado">Estado:</label>
          <input
            type="text"
            id="estado"
            name="estado"
            value={cliente.estado}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-1">
          Salvar
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn btn-secondary"
        >
          Cancelar
        </button>
      </form>
    </div>
      );
    };
    
export default EditarCliente;