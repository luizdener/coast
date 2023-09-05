import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

import { LinkButton } from '../linkbutton/LinkButton'

import './cardProjeto.scss'


export const CardProjeto = ({id, name, budget, category, description, handleRemove}) => {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, budget)
    }

    return(
        <div className="card-projeto">
            <h4>{name}</h4>
            <p><span>Orçamento: </span>R${budget}</p>

            {category === 'none' && <p>{description}</p>}
            {category != 'none' && 
                <p className='category-text'>
                    <span className={`${category.toLowerCase()}`}></span>
                    {category}
                </p>
            }     

            <div className="icons">
                <button>
                    <LinkButton type='edit' to={`/projeto/${id}`} text={<BsPencil/>}/>
                </button>

                <button onClick={remove}>
                    <LinkButton type='erase' to="#" text={<BsFillTrashFill/>}/>
                </button>
            </div>
        </div> 
    )
}