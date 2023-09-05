import { useNavigate } from 'react-router-dom' 

import "../styles/novoprojeto.scss"

import { Formulario } from "../components/formuario/Formulario"

const NovoProjeto = () => {

    const navigate = useNavigate()

    function createPost(project) {
        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            navigate('/projetos', {state: {message: 'Projeto criado com sucesso'}})
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="novo-projeto">
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <Formulario handleSubmit={createPost} btnText="Criar Projeto"/>   
        </div>       
    )
}

export default NovoProjeto