import axios from "axios";

export const api = axios.create({
    baseURL: 'https://tsunode-verso-api.onrender.com',
    timeout: 10000
});