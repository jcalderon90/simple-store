import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
};

export default SearchBar;