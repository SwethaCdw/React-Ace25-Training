import { useState } from "react";
import Header from "../../components/header/header"
import { LOGIN } from "../../constants";
import styles from "./loginScreen.module.css";
import { login } from "../../services/readJson/readJson";
import { useNavigate } from "react-router";


const LoginScreen = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const nameRegex = /^[a-z A-Z]+$/;
    const passwordRegex = /^([a-zA-Z]+)([0-9]+)([!@#$%^&*]+)$/;
    const navigate = useNavigate();



    const handleNameChange = (event) => {
        const nameValue = event.target.value;
        if(!nameRegex.test(nameValue)){
            setNameError('Name should contain only Alphabets')
        }else if(nameValue.length < 7){
            setNameError('Name should be atleast 8 characters')
        }else{
            setNameError('');
        }
        setUserName(nameValue);
    }


    const handlePasswordChange = (event) => {
        const passwordValue = event.target.value;
        if(!passwordRegex.test(passwordValue)){
            setPasswordError('Password should contain letters, digits and special characters')
        }else if(passwordValue.length < 7){
            setPasswordError('password should be atleast 8 characters')
        }else{
            setPasswordError('');
        }
        setPassword(passwordValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(login(userName, password)){
            localStorage.setItem('user',JSON.stringify({userName, password}));
            navigate('/categories/couches');
        }else{
            setNameError("invalid Username")
            setPasswordError("invalid Password")
        }

    }
    return(
        <>
        <main className={styles.login_screen_main_section}>
            <div className={styles.form_section}>
                <h1 className={styles.form_heading}>{LOGIN.HEADING}</h1>
                <h2 className={styles.form_subheading}>{LOGIN.SUB_HEADING}</h2>
                <form className={styles.login_form} onSubmit={handleSubmit}>
                    <label className={styles.form_label}>{LOGIN.FORM.INPUT_1}</label>
                    <input className={styles.form_input} type="text" onChange={handleNameChange}/>
                    <p className={styles.error}>{nameError}</p>
                    <label className={styles.form_label}>{LOGIN.FORM.INPUT_2}</label>
                    <input className={styles.form_input} type="password" onChange={handlePasswordChange}/> 
                    <p className={styles.error}>{passwordError}</p>
                    <button type="submit" className={styles.form_button}>{LOGIN.FORM.BUTTON}</button>
                </form>
            </div>
        </main>
        </>
    )
}

export default LoginScreen;