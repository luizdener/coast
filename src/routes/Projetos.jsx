import { useLocation, useNavigate} from "react-router-dom"
import { useState, useEffect} from "react"

import { Message } from "../components/message/Message"
import Container from "../components/layout/Container"
import { LinkButton } from "../components/linkbutton/LinkButton"
import { CardProjeto } from "../components/projeto/CardProjeto"
import { Loading } from "../components/loading/Loading"

import "../styles/projetos.scss"

const Projetos = () => {

    const navigate = useNavigate()
    
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    },[])

    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(data => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso')
        })
        .catch(err => console.log(err))
    }


    return (
        <div className="projetos">
            <div className="title-container">
                <h1>Meus projetos</h1>
                <LinkButton to="/novoprojeto" text="Criar projeto"/>     
            </div>
            {message && <Message type="sucess" msg={message}/>}
            {projectMessage && <Message type="sucess" msg={projectMessage}/>}
            <Container customClass="start">
                {projects.length > 0 && projects.map((project) => (
                    <CardProjeto
                    id={project.id}
                    name={project.name}
                    budget={project.budget}
                    category={project?.category?.name}
                    key={project.id}
                    handleRemove={removeProject}
                    />
                ))}
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados</p>
                )}
            </Container>
        </div>  
    )
}

export default Projetos