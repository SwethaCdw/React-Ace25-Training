import styles from "./input.module.css";

const Input = ({label, inputType, onBlur, onChange, errorHandler}) => {
    return(
        <>
        <label className={styles.form_label}>{label}</label>
        <input className={styles.form_input} type={inputType} onBlur={onBlur} onChange={onChange}/>
        <p className={styles.error}>{errorHandler}</p>
        </>
    )
}

export default Input;