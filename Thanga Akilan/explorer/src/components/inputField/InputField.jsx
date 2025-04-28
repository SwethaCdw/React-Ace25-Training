import { Children } from "react";
import "./InputField.css"

const InputField = ({children, labelName }) => {
    return(
        <div className="input-container">
            <label className="input-label" >{labelName}</label>
            {/* <input className="input-element" type={inputType} id={labelName} /> */}
            {children}
        </div>
    )
}


export default InputField;