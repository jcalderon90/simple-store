const API_BASE = 'https://fakestoreapi.com';

export const getProducts = async () => {
    try {
        const response = await fetch(`${API_BASE}/products`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export const getProduct = async (id) => {
    try {
        const response = await fetch(`${API_BASE}/products/${id}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
};

export const getCategories = async () => {
    try {
        const response = await fetch(`${API_BASE}/products/categories`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};