
import { createContext, useContext, useState } from "react";
import { getProducts as getProductsAPI } from "../services/api";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useStore debe estar dentro de un StoreProvider');
    }
    return context;
};



export const StoreProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getProducts = async () => {

        try {
            setLoading(true);
            setError(null);
            const products = await getProductsAPI();

            return products;
        }
        catch (error) {
            console.error('Error fetching products:', error);
            setError(error.message || 'Error al cargar productos');
            throw error;
        }
        finally {
            setLoading(false);
        }

    };




    return (
        <StoreContext.Provider value={{
            loading,
            error,
            getProducts,
            setError
        }}>
            {children}
        </StoreContext.Provider>
    );
};


