import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductModal({ product, isOpen, onClose }) {
    const { addToCart } = useCart();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold">{product.title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-64 object-contain"
                        />
                    </div>

                    <div>
                        <p className="text-3xl font-bold text-blue-600 mb-4">
                            ${product.price.toFixed(2)}
                        </p>

                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Categoría:</h3>
                            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                {product.category}
                            </span>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Calificación:</h3>
                            <div className="flex items-center">
                                <span className="text-yellow-500">★</span>
                                <span className="ml-1">{product.rating?.rate} ({product.rating?.count} reseñas)</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-semibold mb-2">Descripción:</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <button
                            onClick={() => addToCart(product)}
                            className="w-full bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition cursor-pointer"
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}