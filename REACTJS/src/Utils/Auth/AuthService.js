import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/auth'

class AuthService {

    login(username, password){
        return axios
            .post(API_URL + '/login', {
                username : username,
                password: password
            })
            .then (res => {
                if (res.data.token){
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
            return res.data;
            }).catch (error => {
                return(error);
            })
    }

    logout(){
        localStorage.removeItem("user");
    }

    getCurrentUser () {
        return (JSON.parse(localStorage.getItem("user")));
    }

}

export default new AuthService();