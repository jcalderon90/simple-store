
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

export default function Cart() {
    const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();
    const [showCheckout, setShowCheckout] = useState(false);
    const [orderCompleted, setOrderCompleted] = useState(false);

    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = total;
    const tax = subtotal * 0.1; // 10% tax
    const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
    const finalTotal = subtotal + tax + shipping;

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-2xl font-bold">Carrito Vacío</h2>

                <Link
                    to="/store"
                    className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 cursor-pointer"
                >
                    Ir a Productos
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Tu Carrito</h1>
                <button
                    onClick={clearCart}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
                >
                    Vaciar Carrito
                </button>
            </div>

            <div className="space-y-4">
                {cart.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onRemove={() => removeFromCart(item.id)}
                        onUpdate={qty => updateQuantity(item.id, qty)}
                    />
                ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Resumen de Compra</h2>

                <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                        <span>Productos ({itemCount} items):</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Impuestos (10%):</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Envío:</span>
                        <span>{shipping === 0 ? 'Gratis' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    {shipping === 0 && (
                        <div className="text-sm text-green-600">
                            ¡Envío gratis por compras mayores a $100!
                        </div>
                    )}
                </div>

                <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold">
                        <span>Total:</span>
                        <span>${finalTotal.toFixed(2)}</span>
                    </div>
                </div>

                <button
                    onClick={() => setShowCheckout(true)}
                    className="mt-6 w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 cursor-pointer font-semibold"
                >
                    Proceder al Checkout
                </button>
            </div>

            {/* Checkout Modal */}
            {showCheckout && !orderCompleted && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
                        <h2 className="text-2xl font-bold mb-6">Finalizar Compra</h2>

                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">Nombre Completo</label>
                                <input
                                    type="text"
                                    className="w-full border rounded px-3 py-2"
                                    placeholder="Tu nombre completo"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full border rounded px-3 py-2"
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Dirección</label>
                                <textarea
                                    className="w-full border rounded px-3 py-2"
                                    rows="3"
                                    placeholder="Tu dirección de envío"
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded mb-6">
                            <div className="flex justify-between font-semibold">
                                <span>Total a pagar:</span>
                                <span>${finalTotal.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowCheckout(false)}
                                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={() => {
                                    setOrderCompleted(true);
                                    setShowCheckout(false);
                                }}
                                className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600"
                            >
                                Confirmar Pedido
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Order Confirmation */}
            {orderCompleted && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4 text-center">
                        <div className="text-green-500 text-6xl mb-4">✓</div>
                        <h2 className="text-2xl font-bold mb-4">¡Pedido Confirmado!</h2>
                        <p className="text-gray-600 mb-4">
                            Tu pedido ha sido procesado exitosamente.
                        </p>
                        <div className="bg-gray-50 p-4 rounded mb-6">
                            <div className="text-sm text-gray-600 mb-2">Número de pedido:</div>
                            <div className="font-mono font-bold">#ORD-{Date.now().toString().slice(-6)}</div>
                            <div className="text-sm text-gray-600 mt-2">Total pagado: ${finalTotal.toFixed(2)}</div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setOrderCompleted(false);
                                    clearCart();
                                }}
                                className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                            >
                                Continuar Comprando
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}