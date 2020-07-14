import axios from 'axios';

const baseURL = 'https://nova-modelling-agency-backend.herokuapp.com';

let http = axios.create({
    baseURL: baseURL
});


export default http;