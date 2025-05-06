import { useRef, useState } from 'react';
import Button from '../../components/button/Button';
import './login-screen.css'
import { useUserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const nameRegex = /[0-9]|[\W]k/;

const LoginScreen = () => {
    const [userInfo, setUserInfo] = useState({ userName: '', password: '' });
    const [errorText, setErrorText] = useState({ userNameText: '', passwordText: '' });
    const { setUser } = useUserContext();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorText.userNameText && !errorText.userNameText && userInfo.userName && userInfo.password) {
            setUser(userInfo.userName);
            setUserInfo({ userName: '', password: '' });
            navigate('/');
        }
    }

    const handleNameChange = (event) => {
        const inputValue = event.target.value;
        if (nameRegex.test(inputValue)) {
            setErrorText((prevErr) => ({ ...prevErr, userNameText: 'Name cannot contain numbers or special characters' }));
        } else if (inputValue.length < 8) {
            setErrorText((prevErr) => ({ ...prevErr, userNameText: 'Name should contain minimum 8 characters' }));
        } else {
            setErrorText((prevErr) => ({ ...prevErr, userNameText: '' }));
        }
        setUserInfo((prevInfo) => ({ ...prevInfo, userName: inputValue }));
    }

    const handlePasswordChange = (event) => {
        setUserInfo((prevInfo) => ({ ...prevInfo, password: event.target.value }));
    }

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