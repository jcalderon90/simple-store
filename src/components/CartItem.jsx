export default function CartItem({ item, onRemove, onUpdate }) {
    return (
        <div className="flex items-center gap-4 p-4 border rounded-lg">
            <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
            />
            <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => onUpdate(item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                >
                    -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                    onClick={() => onUpdate(item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                >
                    +
                </button>
            </div>
            <div className="text-right">
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                    onClick={onRemove}
                    className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}