import LoginForm from "../../components/loginForm/loginForm";
import { LOGIN } from "../../constants/LoginConstants";
import styles from "./loginScreen.module.css";


const LoginScreen = () => {

    return(
        <>
        <main className={styles.login_screen_main_section}>
            <div className={styles.form_section}>
                <h1 className={styles.form_heading}>{LOGIN.HEADING}</h1>
                <h2 className={styles.form_subheading}>{LOGIN.SUB_HEADING}</h2>
                <LoginForm />
            </div>
        </main>
        </>
    )
}

export default LoginScreen;