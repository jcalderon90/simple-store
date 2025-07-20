import axios from "axios";


const API = 'https://fakestoreapi.com';

const instance = axios.create({

    baseURL: API

});

export default instance;