import "./linkbutton.scss"

import {Link} from 'react-router-dom'

export const LinkButton = ({to,text, type}) => {
    return (
        <Link className={`btn ${type}`} to={to}>{text}</Link>
   )
}