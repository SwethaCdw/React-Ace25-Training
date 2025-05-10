import LabelWrapper from "../labelWrapper/labelWrapper"
import styles from "../contactForm/ContactForm.module.css"

const InputElement = ({ labelName, valueRef, handleChange, error}) => {
    return(
            <LabelWrapper labelName={labelName} >
                <input className={styles.input_element} ref={valueRef} onChange={handleChange} type="text" />
                <p className={styles.error}>{error}</p>
            </LabelWrapper>
    )
}

export default InputElement;