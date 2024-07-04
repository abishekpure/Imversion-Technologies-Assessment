import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartslices';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p>{product.description}</p>
      <p className="text-sm text-gray-600">{product.brand}</p>
      <p className="text-lg font-semibold">${product.price}</p>
      <button onClick={handleAddToCart} className="mt-2 bg-blue-500 text-white py-1 px-2 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
