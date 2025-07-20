import axios from "./axios.js";
import auth_header from "./auth_header.js";


export const getProductsRequest = () => axios.get('/products');

export const getProductRequest = (id, token) => axios.get(`/products/${id}`, auth_header(token));

// export const createUserRequest = (user, token) => axios.post('/user/create', user, auth_header(token));

// export const updateUserRequest = (user, token) => axios.patch(`/user/update/${user._id}`, user, auth_header(token));

// export const deleteUserRequest = (id, token) => axios.delete(`/user/delete/${id}`, auth_header(token));