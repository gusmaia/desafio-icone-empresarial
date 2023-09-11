import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import "./styles/Home.css"

function Home() {
  const [pessoas, setPessoas] = useState<any[]>([])
  const [clientes, setClientes] = useState<any[]>([])
  const [error, setError] = useState<any>()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePessoas = await axios.get('http://localhost:3000/pessoas')
        setPessoas(responsePessoas.data)
        
        const responseClientes = await axios.get('http://localhost:3000/clientes')
        setClientes(responseClientes.data)
      } catch (error) {
        setError(error)
      }
    }

    fetchData()
  }, [])

  const handleDelete = async (id: number, type: string) => {
    try {
      await axios.delete(`http://localhost:3000/${type}s/${id}`);
      
      if (type === 'pessoa') {
        setPessoas((prevPessoas) => prevPessoas.filter((pessoa) => pessoa.id !== id))
      } else if (type === 'cliente') {
        setClientes((prevClientes) => prevClientes.filter((cliente) => cliente.id !== id))
      }
    } catch (error) {
      setError(error)
    }
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <h1 className="text-primary mb-4">Tabela de Pessoas</h1>
          <Link to="/CriarPessoa" className="btn btn-primary mb-2">
            Criar
          </Link>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>CPF</th>
                  <th>Nome</th>
                  <th>Data de Nascimento</th>
                  <th>Telefone</th>
                  <th>Email</th>
                  <th>ID do Cliente</th>
                  <th>Nome do Cliente</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {pessoas.map((pessoa) => (
                  <tr key={pessoa.id}>
                    <td>{pessoa.id}</td>
                    <td>{pessoa.cpf}</td>
                    <td>{pessoa.nome}</td>
                    <td>{pessoa.data_nascimento}</td>
                    <td>{pessoa.telefone}</td>
                    <td>{pessoa.email}</td>
                    <td>{pessoa['cliente.id']}</td>
                    <td>{pessoa['cliente.nome']}</td>
                    <td>
                      <button
                        className="btn btn-warning mr-2"
                        onClick={() => navigate(`/EditarPessoa/${pessoa.id}`)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(pessoa.id, 'pessoa')}
                      >
                        Apagar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col">
          <h1 className="text-primary mb-4">Tabela de Clientes</h1>
          <Link to="/CriarCliente" className="btn btn-primary mb-2">
            Criar
          </Link>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>CNPJ</th>
                  <th>Nome</th>
                  <th>Data de Fundação</th>
                  <th>Tipo</th>
                  <th>Telefone</th>
                  <th>Email</th>
                  <th>CEP</th>
                  <th>Logradouro</th>
                  <th>Número</th>
                  <th>Bairro</th>
                  <th>Cidade</th>
                  <th>Estado</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente) => (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.cnpj}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.data_fundacao}</td>
                    <td>{cliente.tipo}</td>
                    <td>{cliente.telefone}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.cep}</td>
                    <td>{cliente.logradouro}</td>
                    <td>{cliente.numero}</td>
                    <td>{cliente.bairro}</td>
                    <td>{cliente.cidade}</td>
                    <td>{cliente.estado}</td>
                    <td>
                      <button
                        className="btn btn-warning mr-2"
                        onClick={() => navigate(`/EditarCliente/${cliente.id}`)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(cliente.id, 'cliente')}
                      >
                        Apagar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
