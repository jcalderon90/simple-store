import { useState, useEffect } from 'react';

export default function Notification({ show, message, onHide }) {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onHide();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [show, onHide]);

    if (!show) return null;

    return (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse">
            {message}
        </div>
    );
}