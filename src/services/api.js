import axios from 'axios';

const API_BASE = 'https://fakestoreapi.com';

// Create axios instance
const api = axios.create({
    baseURL: API_BASE
});

// Auth header helper
const authHeader = (token) => ({
    headers: { Authorization: `${token}` }
});

// Products API
export const getProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export const getProduct = async (id, token = null) => {
    try {
        const config = token ? authHeader(token) : {};
        const response = await api.get(`/products/${id}`, config);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
};

export const getCategories = async () => {
    try {
        const response = await api.get('/products/categories');
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};

// Auth API
export const loginRequest = async (user) => {
    try {
        const response = await api.post('/auth/login', user);
        // Fake store API returns: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};