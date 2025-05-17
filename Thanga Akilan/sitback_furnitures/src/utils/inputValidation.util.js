import { LOGIN } from "../constants/LoginConstants";


const validateName = (nameValue) => {
    if(!(LOGIN.REGEX.USERNAME).test(nameValue)){
        return('Name should contain only Alphabets')
    }else if(nameValue.length < 7){
        return('Name should be atleast 8 characters')
    }else{
        return('');
    }
}

const validatePassword = (passwordValue) => {
    if(!(LOGIN.REGEX.PASSWORD).test(passwordValue)){
        return('Password should contain letters, digits and special characters')
    }else if(passwordValue.length < 7){
        return('password should be atleast 8 characters')
    }else{
        return('');
    }
}



export {
    validateName,
    validatePassword
}