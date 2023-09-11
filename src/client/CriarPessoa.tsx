import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import InputMask from "react-input-mask"
import { pessoaObj } from "../server/models/pessoaModel"

function CriarPessoa() {
    const navigate = useNavigate()
    const [pessoa, setPessoa] = useState<pessoaObj>({
        cpf: '',
        nome: '',
        data_nascimento: '',
        telefone: '',
        email: '',
    })
    const [error, setError] = useState<any>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPessoa({
          ...pessoa,
          [name]: value,
        });
      };

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          await axios.post('/pessoas', pessoa);
          alert('Pessoa salva com sucesso!');
          navigate('/')
        } catch (error) {
          console.error('Erro ao salvar a pessoa:', error);
          alert('Ocorreu um erro ao salvar a pessoa. Verifique o console para mais detalhes.');
        }
      };

      return (
        <div className="container mt-4">
      <h1 className="text-primary mb-4">Formulário de Pessoa</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cpf">CPF:</label>
          <InputMask
            mask="999.999.999-99"
            type="text"
            id="cpf"
            name="cpf"
            value={pessoa.cpf}
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
            value={pessoa.nome}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="data_nascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="data_nascimento"
            placeholder="aaaa-mm-dd"
            name="data_nascimento"
            value={pessoa.data_nascimento}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <InputMask
            mask="(99) 99999-9999"
            type="text"
            id="telefone"
            name="telefone"
            value={pessoa.telefone}
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
            value={pessoa.email}
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
    
export default CriarPessoa;