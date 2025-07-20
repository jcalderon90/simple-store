import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { useStore } from '../context/StoreContext';

const Store = () => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const { loading, getProducts } = useStore();

    const categories = [
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics"
    ];

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                setProducts(products);
                setFilteredProducts(products);
                console.log('List Products:', products);
            }
            catch (error) {
                console.error('Error loading products:', error);
            }
        };

        fetchProducts();

    }, []);



    const applyFilters = (searchTerm, category) => {
        let filtered = products;

        // Apply search filter
        if (searchTerm.trim()) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply category filter
        if (category) {
            filtered = filtered.filter(product => product.category === category);
        }

        setFilteredProducts(filtered);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        applyFilters(term, selectedCategory);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        applyFilters(searchTerm, category);
    };



    if (loading) return <div className="text-center py-8">Cargando...</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                    <SearchBar
                        onSearch={handleSearch}
                    />
                </div>

                <div className="relative">
                    <select
                        value={selectedCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[200px]"
                    >
                        <option value="">Todas las categorías</option>
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};


export default Store;