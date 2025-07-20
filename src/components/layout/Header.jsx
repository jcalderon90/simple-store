

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const { isAuth, logout } = useAuth();
    const { cart } = useCart();
    const navigate = useNavigate();

    console.log(isAuth);

    const handleLogout = () => {
        logout();
    };

    const handleCartClick = () => {
        navigate('/cart');
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="header border flex justify-between items-center px-5 py-3 bg-gray-200">
            <div className="logo"><span className="text-3xl">My Store</span></div>
            <div className="auth-buttons flex items-center gap-4">
                {isAuth && (
                    <button
                        onClick={handleCartClick}
                        className="relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer flex items-center gap-2"
                    >
                        🛒 Carrito
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                                {totalItems}
                            </span>
                        )}
                    </button>
                )}
                {isAuth ? (
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={handleLogout}>Logout</button>
                ) : (<></>)}
            </div>
        </header>
    );
};

export default Header;