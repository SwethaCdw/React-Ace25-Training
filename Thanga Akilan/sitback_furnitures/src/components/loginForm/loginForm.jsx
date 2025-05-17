import { useState } from "react";
import { LOGIN } from "../../constants/LoginConstants.js";
import { login } from "../../services/readJson/readJson.js";
import { useNavigate } from "react-router";
import Input from "../input/Input.jsx";
import { validateName, validatePassword } from "../../utils/inputValidation.util.js";
import styles from "./loginForm.module.css"
import { LOCAL_STORAGE } from "../../constants/localStorageConstants.js";

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();



    const handleChange = (event, error, errorSetter, valueSetter, validator) => {
        if(error){
            const value = event.target.value;
            errorSetter(validator(value));
            valueSetter(value);
        }
    }

    const handleBlur = (event, errorSetter, valueSetter, validator) => {
        const value = event.target.value;
        errorSetter(validator(value));
        valueSetter(value);
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        if(!nameError && !passwordError && login(userName, password)){
            localStorage.setItem(LOCAL_STORAGE.USER.NAME,JSON.stringify({userName}));
            navigate(LOGIN.NAVIGATE_TO);
        }else{
            setNameError(LOGIN.FORM.INPUT_1.ERROR.INVALID)
            setPasswordError(LOGIN.FORM.INPUT_2.ERROR.INVALID)
        }
    }

    return(
        <form className={styles.login_form} onSubmit={handleSubmit}> 
            <Input label={LOGIN.FORM.INPUT_1.NAME} inputType={LOGIN.FORM.INPUT_1.TYPE} onBlur={(e)=>handleBlur(e, setNameError, setUserName, validateName)} onChange={(e)=>handleChange(e, nameError, setNameError, setUserName, validateName)} errorHandler={nameError}  />
            <Input label={LOGIN.FORM.INPUT_2.NAME} inputType={LOGIN.FORM.INPUT_2.TYPE} onBlur={(e)=>handleBlur(e,setPasswordError, setPassword, validatePassword)} onChange={(e)=>handleChange(e, passwordError, setPasswordError, setPassword, validatePassword)} errorHandler={passwordError} />
            <button type={LOGIN.FORM.BUTTON.TYPE} className={styles.form_button}>{LOGIN.FORM.BUTTON.NAME}</button>
        </form>
        )
}


export default LoginForm;