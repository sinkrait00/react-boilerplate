import axios from "axios";


export const generateHeaders = () =>{
    return {
        'lang': localStorage.getItem('locale')
    }
}

export const instance = axios.create({
    baseURL: 'http://10.244.10.65:8000/api/v1/',
    timeout: 1000,
});