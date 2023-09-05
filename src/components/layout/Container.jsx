import './container.scss'

const Container = (props) => {
    return(
        <div className={`container ${props.customClass}`}>
            {props.children}
        </div>
    )
}

export default Container