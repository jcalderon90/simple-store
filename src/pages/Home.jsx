import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigationTo = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-center text-5xl font-bold">Bienvenido</h1>

            <button
                onClick={() => navigationTo('/login')}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
            >
                Comenzar
            </button>

        </div>
    );
};

export default Home;