import axios from "./axios.js";

export const loginRequest = (user) => axios.post(`/auth/login`, user);
