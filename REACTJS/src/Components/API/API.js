import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1';
const ACCESS_TOKEN = {'x-access-token': JSON.parse(localStorage.getItem("user")).token}

class API {

    get(path) {
        return new Promise((resolve, reject) => {
            axios.get(API_URL + path, { headers: ACCESS_TOKEN})
                .then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
        })
    }

    post(path, body) {
        return new Promise((resolve, reject) => {
            axios.post(API_URL + path, body, { headers: ACCESS_TOKEN})
                .then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
        })
    }

}

export default new API();