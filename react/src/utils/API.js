import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:10000/',
});

export default API;
