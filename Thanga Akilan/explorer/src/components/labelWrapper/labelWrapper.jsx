import "./labelWrapper.css"

const LabelWrapper = ({children, labelName }) => {
    return(
        <div className="input-container">
            <label className="input-label" >{labelName}</label>
            {children}
        </div>
    )
}


export default LabelWrapper;