import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://kenziehub.herokuapp.com',
    timeiut: 8000,
})