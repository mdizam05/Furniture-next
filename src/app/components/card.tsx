import { useState } from "react";

const LatestProducts = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Define products array
    const products = [
      {
        id: 1,
        image: '/image 1168.png',
        name: 'Cantilever chair',
        price: 42.00
      },
      // Add more products as needed
    ];
  
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 hover:bg-gray-100"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default LatestProducts;