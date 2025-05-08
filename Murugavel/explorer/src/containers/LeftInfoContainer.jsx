import '../assets/styles/left-info-container.css'

const LeftInfoContainer = ({ style, children }) => {
    return (
        <div className="left-info-container" style={style}>
            {children}
        </div>
    )
}

export default LeftInfoContainer;