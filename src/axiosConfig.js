import axios from 'axios'

const base_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

export const axiosConfig = axios.create({
    baseURL: base_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosConfig;