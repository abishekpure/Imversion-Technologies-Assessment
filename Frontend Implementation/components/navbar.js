import React from 'react';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <div>Logo</div>
        <div>Cart ({cartItems.length})</div>
      </div>
    </nav>
  );
};

export default NavBar;
