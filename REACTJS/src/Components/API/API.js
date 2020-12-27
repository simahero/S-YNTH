import axios from 'axios';
import authHeader from '../Auth/AuthHeader';

class API {

    get(path) {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:5000/api/v1' + path, { headers: {'x-access-token': JSON.parse(localStorage.getItem("user")).token}})
                .then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
        })
    }

    post(path, body) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:5000/api/v1' + path, body, { headers: {'x-access-token': JSON.parse(localStorage.getItem("user")).token}})
                .then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
        })
    }

}

export default new API();