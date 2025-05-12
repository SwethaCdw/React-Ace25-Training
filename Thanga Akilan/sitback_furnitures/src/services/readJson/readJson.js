import users from '../../assets/users.json'



const login = (username, password) => {
    for(let user of users){
        if(user.userName == username && user.password == password){
            return true;
        }
    }
    return false;
}


export {
    login,
}