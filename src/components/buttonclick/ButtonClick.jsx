import "./buttonclick.scss"

export const ButtonClick = ({onClick, text}) => {
    return (
        <button className='btn-click' onClick={onClick}>{text}</button>
    )
}