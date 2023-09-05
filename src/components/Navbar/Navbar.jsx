import {Link} from 'react-router-dom'
import "./navbar.scss"

import Container from '../layout/Container'

const Navbar = () => {
    return (
        <header className={`header`}>
            <Container>
                <Link to="/"><img src='src\images\costs_logo.png' alt="logo costs" /></Link>
                <nav className={`menu`}>
                    <Link to="/">Home</Link>
                    <Link to="/projetos">Projetos</Link>
                    <Link to="/empresa">Empresa</Link>
                    <Link to="/contatos">Contatos</Link>
                </nav>
            </Container>
        </header>
    )
}

export default Navbar