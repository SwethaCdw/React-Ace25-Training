import styles from "./Button.module.css";
import propTypes from "prop-types";

const Button = ({children, onClick, className}) => {

    return(
        <button className={`${className} ${styles.button}`} onClick={onClick}>{children}</button>
    )
};

Button.propTypes = {
    className: propTypes.object,
    onClick: propTypes.func.isRequired,
    children: propTypes.string.isRequired
};

export default Button;