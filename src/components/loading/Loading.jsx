import "./loading.scss"

import loading from "../../images/loading.svg"

export const Loading = () => {
    return (
        <div className="loading">
            <img className="loader" src={loading} alt="Loading" />
        </div>
    )
}