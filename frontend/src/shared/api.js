import axios from 'axios';

export default axios.create({
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
    baseURL: 'http://localhost:8080'
});