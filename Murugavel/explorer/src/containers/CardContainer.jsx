import '../assets/styles/card-container.css'

const CardContainer = ({ children }) => {
    return (
        <div className="card-list ibm-plex">
            {children}
        </div>
    );
}

export default CardContainer;