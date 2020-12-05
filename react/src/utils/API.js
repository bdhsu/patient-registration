import axios from 'axios';

const API = axios.create({
    baseURL: 'https://patient-registration-backend.herokuapp.com/',
});

export default API;
