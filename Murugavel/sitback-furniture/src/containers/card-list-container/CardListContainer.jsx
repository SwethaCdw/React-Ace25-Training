import './card-list-container.css'

const CardListContainer = ({ children }) => {
    return (
        <div className="card-list">
            {children}
        </div>
    )
}

export default CardListContainer;