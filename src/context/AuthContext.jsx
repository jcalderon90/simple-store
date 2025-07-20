
import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest } from "../api/auth.js";
import { useNavigate } from "react-router-dom";



// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth deberia estar dentro de un AuthProvider');
    }
    else {
        return context;
    }

};

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigateTo = useNavigate();


    const signin = async (user) => {

        try {

            const res = await loginRequest(user);
            console.log(res.data);

            localStorage.setItem('token', res.data.token);

            setUser(res.data.user);
            setIsAuth(true);

        }
        catch (error) {

            console.error('Login error:', error);

            if (error.response?.data) {
                if (Array.isArray(error.response.data)) {
                    setErrors(error.response.data);
                } else {
                    setErrors([error.response.data.message || 'Error de autenticación']);
                }
            } else {
                setErrors(['Error de conexión. Verifica tu conexión a internet.']);
            }

        }

    };


    const logout = () => {

        setLoading(true);

        localStorage.removeItem('token');

        setIsAuth(false);
        setUser(null);

        window.location.href = '/login';

        setLoading(false);

    };


    useEffect(() => {

        if (errors.length > 0) {

            const timer = setTimeout(() => {

                setErrors([]);

            }, 5000); // Milisegundos

            return () => clearTimeout(timer);

        }

    }, [errors]);


    useEffect(() => {

        console.log(localStorage.getItem('token'));

        async function checkLogin() {

            const token = localStorage.getItem('token');

            if (!token) {

                setLoading(false);
                setIsAuth(false);
                setUser(null);
                navigateTo('/login');
                return;

            }

            setLoading(false);
            setIsAuth(true);

            console.log(token);

        };

        checkLogin();

    }, [navigateTo]);



    return (

        <AuthContext.Provider value={{

            signin,
            logout,
            loading,
            setLoading,
            user,
            isAuth,
            errors,

        }}>
            {children}
        </AuthContext.Provider>

    );

};