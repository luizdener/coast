import {v4 as uuidv4} from "uuid"

import { useParams } from "react-router-dom"
import { useState, useEffect} from "react"

import { ButtonClick } from "../components/buttonclick/ButtonClick"
import { Formulario } from "../components/formuario/Formulario"
import { Message } from "../components/message/Message"
import { ServiceForm } from "../components/serviceform/ServiceForm"
import { CardProjeto } from "../components/projeto/CardProjeto"
import Container from "../components/layout/Container"


import "../styles/projeto.scss"

const Projeto = () => {
    
    const {id} = useParams()

    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setServices(data.services)
        })
        .catch((err) => console.log(err))
    }, [id])

    function createService(project){

        const lastService = project.services[project.services.length -1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        setMessage()
        setTimeout(() => {
            if(newCost > parseFloat(project.budget)) {
                setMessage('Orçamento ultrapassado, verifique o valor do serviço')
                setType('error')
                project.services.pop()
                return false
            }

            project.cost = newCost

            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type' : 'application/json',
                },
                body: JSON.stringify(project)
            })
            .then(resp => resp.json())
            .then((data) => {
                setShowServiceForm(false)
                setMessage('Serviço adicionado com sucesso')
                setType('sucess')
            })
            .catch(err => console.log(err))
        }, 1)

    }

    function removeService(id, cost){
        const servicesUpdated = project.services.filter((service) => service.id !== id)

        const projectUpdated = project

        projectUpdated.services = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        setMessage()

        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${projectUpdated.id}`,{
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(projectUpdated)
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(projectUpdated)
                setServices(servicesUpdated)
                setMessage('Serviço removido com sucesso!')
                setType('sucess')
            })
            .catch(err => console.log(err))
        }, 1)
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    function editProject(project) {
            setMessage('')
            setTimeout(() => {
                if(project.budget < project.cost) {
                    setMessage('Orçamento não pode ser menor que o custo do projeto')
                    setType('error')
                    return false
                }

                project.cost = newCost
                
                fetch(`http://localhost:5000/projects/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(project)
                })
                .then(resp => resp.json())
                .then((data) => {
                    setProject(data)
                    setShowProjectForm(false)
                    setMessage('Edição concluida com sucesso')
                    setType('sucess')
                })
                .catch(err => console.log(err))
            }, 1)
        }

    return (
        <div className="projeto">
            {message && <Message type={type} msg={message}/>}
            <section className="project-header">
                <h1>Projeto: {project.name}</h1>
                <ButtonClick onClick={toggleProjectForm} text={!showProjectForm ? 'Editar projeto' : 'Fechar'}/>
            </section>

            <section className="dados-container">
                {!showProjectForm ? (
                    <div>
                        <section className="description">
                            <p><span>Categoria: </span>{project?.category?.name}</p>
                            <p><span>Total do orçamento: </span>R${project.budget}</p>
                            <p><span>Total utilizado: </span>R${project.cost}</p>
                        </section>
                    </div>
                ) : (
                    <div>
                        <Formulario handleSubmit={editProject} btnText="Concluir edição" projectData={project}/>
                    </div>
                )}
            </section>

            <div className="services-container">
                <section className="services-header">
                    <h2>Adicione um serviço:</h2>
                    <ButtonClick onClick={toggleServiceForm} text={!showServiceForm ? 'Adicionar serviço' : 'Fechar'} />
                </section>

                <section className="services">
                    {!showServiceForm ? (
                        <div>
                            <h2>Serviços:</h2>
                            <Container customClass="start">
                                {services.length > 0 &&
                                services.map((service) => (
                                    <CardProjeto
                                        id={service.id}
                                        name={service.name}
                                        budget={service.cost}
                                        category='none'
                                        description={service.description}
                                        handleRemove={removeService}
                                    />
                                ))
                                }
                                {services.length === 0 && <p>Não há serviços</p>}
                            </Container>
                        </div>
                    ) : (
                        <ServiceForm
                            handleSubmit={createService}
                            textBtn="Adicionar serviço"
                            projectData={project}
                        />
                    )}                                
                </section>
            </div>
        </div>
    )

}

export default Projeto