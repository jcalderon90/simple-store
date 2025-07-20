

import { useState } from 'react';
import ProductModal from './ProductModal';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addToCart } = useCart();

    return (
        <>
            <div className="border rounded-lg p-4 shadow hover:shadow-md transition relative">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition z-10 cursor-pointer"
                    title="Ver detalles"
                >
                    <span className="text-gray-600 text-sm">👁️</span>
                </button>

                <img
                    src={product.image}
                    alt={product.title}
                    className="h-40 object-contain mx-auto"
                />

                <h3 className="font-semibold mt-2 truncate">{product.title}</h3>

                <p className="text-gray-700 mt-1">${product.price.toFixed(2)}</p>

                <button
                    onClick={() => addToCart(product)}
                    className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full cursor-pointer"
                >
                    Agregar al carrito
                </button>
            </div>

            <ProductModal
                product={product}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}