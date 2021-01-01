import axios from 'axios';
import authHeader from '../Auth/AuthHeader';

const API_URL = 'http://localhost:5000/api/v1';

class API {

    get(path) {
        return new Promise((resolve, reject) => {
            axios.get(API_URL + path, { headers: authHeader()})
                .then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
        })
    }

    post(path, body) {
        return new Promise((resolve, reject) => {
            axios.post(API_URL + path, body, { headers: authHeader()})
                .then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
        })
    }

    delete(path, body) {
        return new Promise((resolve, reject) => {
            axios.delete(API_URL + path, body, { headers: authHeader()})
                .then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
        })
    }

}

export default new API();