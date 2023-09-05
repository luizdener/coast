import './styles/globals.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Container from './components/layout/Container'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Home from './routes/Home'
import Projetos from './routes/Projetos'
import Empresa from './routes/Empresa'
import Contatos from './routes/Contatos'
import NovoProjeto from './routes/NovoProjeto'
import Projeto from './routes/Projeto'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
          <Route path="/empresa" element={<Empresa/>}/>
          <Route path="/contatos" element={<Contatos/>}/>
          <Route path="/novoprojeto" element={<NovoProjeto/>}/>
          <Route path="/projeto/:id" element={<Projeto/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App
