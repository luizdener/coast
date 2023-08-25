import {Link} from 'react-router-dom'
import "./navbar.scss"

const Navbar = () => {
    return (
        <header>
            <img src="src\images\costs_logo.png" alt="logo costs" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/empresa">Empresa</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )
}

export default Navbar