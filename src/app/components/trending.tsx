import React from 'react';

const TrendingProducts = () => {
    const products = [
    {
        id: 1,
        name: "Cantilever chair",
        image: "/image 1171.png" 
    },
    {
        id: 2,
        name: "Cantilever chair",
        image: "/image 1170.png" 
    },
    {
        id: 3,
        name: "Cantilever chair",
        image: "/image 31.png" 
    },
    {
        id: 1,
        name: "Cantilever chair",
        image: "/image 44.png" 
        }
    ];

    return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {products.map((product) => (
            <div key={product.id} className="bg-gray-50 hover:bg-gray-400 p-4 rounded-lg w-full max-w-sm">
            <div className="aspect-square overflow-hidden mb-4">
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                />
            </div>
            <div className="space-y-2">
                <h3 className="text-lg flex justify-center font-medium text-[#151875] hover:text-gray-800">{product.name}</h3>
            <div className="flex items-center justify-center gap-2">
                <span className="text-[#151875] ">$26.00</span>
                <span className="text-gray-300 line-through">$42.00</span>
            </div>
            </div>
        </div>
        ))}
        </div>
    </div>
    );
};

export default TrendingProducts;