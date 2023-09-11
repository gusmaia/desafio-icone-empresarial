import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import CriarPessoa from "./CriarPessoa"
import EditarPessoa from "./EditarPessoa"
import CriarCliente from "./CriarCliente"
import EditarCliente from "./EditarCliente"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/CriarPessoa" element={<CriarPessoa />}></Route>
        <Route path="/EditarPessoa/:id" element={<EditarPessoa />}></Route>
        <Route path="/CriarCliente" element={<CriarCliente />}></Route>
        <Route path="/EditarCliente/:id" element={<EditarCliente />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
