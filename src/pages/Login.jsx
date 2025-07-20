import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: 'johnd',
            password: 'm38rmF$'
        }
    });
    const { signin, loading, setLoading, isAuth, errors: signinErrors } = useAuth();

    const onsubmit = handleSubmit(async (data) => {
        setLoading(true);
        console.log(data);
        await signin(data);
        setLoading(false);
    });



    const navigateTo = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigateTo('/store');
        }
    }, [isAuth, navigateTo]);



    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-60 space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Iniciar Sesión
                    </h2>
                </div>

                {
                    signinErrors.map((error, i) => (
                        <div key={i} className='text-red-400 my-1'>
                            {error}
                        </div>
                    ))
                }


                <form className="mt-8 space-y-6" onSubmit={onsubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">
                                Usuario
                            </label>

                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Usuario"
                                {...register('username', { required: true })}
                            />

                            {
                                errors.username && (
                                    <p className='text-red-400'>
                                        <b>El usuario es requerido</b>
                                    </p>
                                )
                            }
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">
                                Contraseña
                            </label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Contraseña"
                                {...register('password', { required: true })}
                            />

                            {
                                errors.password && (
                                    <p className='text-red-400'>
                                        <b>La contraseña es requerida</b>
                                    </p>
                                )
                            }
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                        >
                            {loading ? <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white"></div> : 'Iniciar Sesión'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;