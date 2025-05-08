import '../assets/styles/card-container.css'

const CardContainer = ({ children }) => {
    return (
        <div className="card-list">
            {children}
        </div>
    );
}

export default CardContainer;