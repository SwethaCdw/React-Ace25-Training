import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import Button from '../../components/button/Button';
import './login-screen.css'

const nameRegex = /[0-9]|[\W]/;

// Function that returns if a user with the userName and password exists in the users json
const findUser = async (userName, password) => {
    const response = await fetch('./src/assets/data/users.json');
    const data = await response.json();
    const userIndex = data.findIndex((user) => user.username == userName && user.password == password);
    return userIndex != -1;
}

const LoginScreen = () => {
    const [userInfo, setUserInfo] = useState({ userName: '', password: '' });
    const [errorText, setErrorText] = useState({ userNameText: '', passwordText: '' });
    const { setUser } = useUserContext();
    const navigate = useNavigate();

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault(); // preventing page reloading
        // If no errors are present and the input fields are valid
        if (!errorText.userNameText && !errorText.userNameText && userInfo.userName && userInfo.password) {
            // Check for the input user from the users json
            const isUserValid = await findUser(userInfo.userName, userInfo.password);
            if (!isUserValid) {
                setErrorText((prevErr) => ({ ...prevErr, passwordText: 'Invalid username / password' }));
                setUserInfo((prevInfo) => ({ ...prevInfo, password: '' })); // resetting value of password
                return;
            }
            setUser(userInfo.userName);
            setUserInfo({ userName: '', password: '' }); // clearing input fields
            navigate('/'); // routing back to home page
        }
    }, [userInfo]);

    const handleNameChange = useCallback((event) => {
        const inputValue = event.target.value;
        if (nameRegex.test(inputValue)) { // checking if the input value passes the regex which checks for invalid format
            setErrorText((prevErr) => ({ ...prevErr, userNameText: 'Name cannot contain numbers or special characters' }));
        } else if (inputValue.length < 5) {
            setErrorText((prevErr) => ({ ...prevErr, userNameText: 'Name should contain minimum 5 characters' }));
        } else {
            setErrorText((prevErr) => ({ ...prevErr, userNameText: '' }));
        }
        setUserInfo((prevInfo) => ({ ...prevInfo, userName: inputValue }));
    }, [userInfo.userName]);

    const handlePasswordChange = useCallback((event) => {
        const inputValue = event.target.value;
        if (inputValue.length < 6) {
            setErrorText((prevErr) => ({ ...prevErr, passwordText: 'Password should contain minimum 6 characters' }));
        } else {
            setErrorText((prevErr) => ({ ...prevErr, passwordText: '' }));
        }
        setUserInfo((prevInfo) => ({ ...prevInfo, password: event.target.value }));
    }, [userInfo.password]);

    return (
        <div className='login-screen'>
            <div className="login-container">
                <h1 className="brand">SITBACK <span className='text-shrink'>FURNITURE</span></h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="label-input-container">
                        <label htmlFor="name" className="label-text">Username</label>
                        <input type="text" name="name" id="name" value={userInfo.userName} onChange={handleNameChange} />
                        {errorText.userNameText && <p className="error-text">{errorText.userNameText}</p>}
                    </div>
                    <div className="label-input-container">
                        <label htmlFor="password" className="label-text">Password</label>
                        <input type="password" name="password" id="password" value={userInfo.password} onChange={handlePasswordChange} />
                        {errorText.passwordText && <p className="error-text">{errorText.passwordText}</p>}
                    </div>
                    <Button>LOGIN</Button>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen;