import "../styles/home.scss"

import savings from "../images/savings.svg"
import { LinkButton } from "../components/linkbutton/LinkButton"

const Home = () => {
    return (
        <div className="home">
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/novoprojeto" text="Criar projeto"/>
            <img src={savings} alt="Costs" />
        </div>
    )
}

export default Home