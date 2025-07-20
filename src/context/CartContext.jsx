
import { createContext, useContext, useState, useMemo } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe estar dentro de un CartProvider');
    }
    return context;
};



export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });

        // Mostrar notificación
        setShowNotification(true);
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const total = useMemo(() => {
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }, [cart]);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            total,
            showNotification,
            setShowNotification
        }}>
            {children}
        </CartContext.Provider>
    );
};

