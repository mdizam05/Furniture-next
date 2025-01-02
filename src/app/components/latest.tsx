import React from 'react';

const LatestProducts = () => {
  const products = [
    {
      id: 1,
      name: "Comfort Handy Craft",
      image: "/image 1166.png" 
    },
    {
      id: 2,
      name: "Comfort Handy Craft",
      image: "/image 15.png" 
    },
    {
      id: 3,
      name: "Comfort Handy Craft",
      image: "/image 1168.png" 
    },
    {
        id: 1,
        name: "Comfort Handy Craft",
        image: "/image 23.png" 
      },
      {
        id: 2,
        name: "Comfort Handy Craft",
        image: "/image 44.png" 
      },
      {
        id: 3,
        name: "Comfort Handy Craft",
        image: "/image 3.png" 
      }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-50 hover:bg-gray-400 p-4 rounded-lg w-full max-w-sm">
            <div className="aspect-square overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-8">
              <h3 className="text-navy-600 text-lg font-medium">{product.name}</h3>
              <div className="flex items-center gap-2">
              <span className="text-navy-600 ">$42.00</span>
              <span className="text-red-500 line-through">$65.00</span>
            </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default LatestProducts;




