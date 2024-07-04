import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../slices/productslices';
import ProductCard from '../components/productcard';

const products = [
    {
      id: 1,
      title: 'Samsung Galaxy A55 5G',
      description: 'A high-end smartphone with a great camera and display.',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.luluhypermarket.com%2Fen-qa%2Fsamsung-galaxy-a55-5g-smartphone-8-gb-ram-256-gb%2Fp%2F2246822&psig=AOvVaw3rvV0DDCaoeBgprOgRMbsE&ust=1720198787904000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLia-f3tjYcDFQAAAAAdAAAAABAI',
      price: 799.99,
      brand: 'Samsung',
      category: 'Electronics',
    },
    {
      id: 2,
      title: 'Apple Macbook Pro',
      description: 'A powerful laptop for professionals and gamers.',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fqa%2Fnewsroom%2F2019%2F11%2Fapple-introduces-16-inch-macbook-pro-the-worlds-best-pro-notebook%2F&psig=AOvVaw3VDMEcQHKC7k-FLeZ2-qSG&ust=1720198961843000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCxxtDujYcDFQAAAAAdAAAAABAE',
      price: 1299.99,
      brand: 'Apple',
      category: 'Computers',
    },
    {
      id: 3,
      title: 'JBL Live 500 BT headphones',
      description: 'Noise-cancelling headphones with superior sound quality.',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FJBL-Tune-500BT-Ear-Headphones%2Fdp%2FB0BF33CYJC&psig=AOvVaw1ZSRULvGimOWYrjvYjwBVq&ust=1720199007841000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICL3OfujYcDFQAAAAAdAAAAABAR',
      price: 199.99,
      brand: 'JBL',
      category: 'Accessories',
    },
    {
      id: 4,
      title: 'Samsung Galaxy S3 SmartWatch',
      description: 'A smartwatch with fitness tracking and mobile connectivity.',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fqatar.microless.com%2Fproduct%2Fsamsung-galaxy-watch-3-45mm-gps-bluetooth-smart-watch-with-advanced-health-monitoring-fitness-tracking-and-long-lasting-battery-us-version-mystic-black-r840black%2F&psig=AOvVaw0u7oNFQ1jpYwu0cOMqFVnN&ust=1720199052826000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjA7f_ujYcDFQAAAAAdAAAAABAE',
      price: 249.99,
      brand: 'Samsung',
      category: 'Wearables',
    },
    {
      id: 5,
      title: 'Apple Ipad 11 inch',
      description: 'A lightweight tablet with a sharp display and long battery life.',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fau%2Fshop%2Fproduct%2FFTXQ2X%2FA%2FRefurbished-11-inch-iPad-Pro-Wi-Fi-256GB-Space-Gray&psig=AOvVaw3rr9zES0LCxXJET_neSsg-&ust=1720199115050000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNi95ZzvjYcDFQAAAAAdAAAAABAJ',
      price: 499.99,
      brand: 'TabMaster',
      category: 'Tablets',
    },
    {
      id: 6,
      title: 'boAT Bluetooth Speaker 10.5',
      description: 'A portable Bluetooth speaker with deep bass and clear sound.',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FboAt-Stone-1450-Multi-Compatibility-Resistance%2Fdp%2FB09SJ32HQZ&psig=AOvVaw1NBpHDV4bDJtx1sSFA_Itp&ust=1720199190101000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjR0b7vjYcDFQAAAAAdAAAAABAE',
      price: 99.99,
      brand: 'AudioBlast',
      category: 'Speakers',
    },
  ];

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const filters = useSelector(state => state.products.filters);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
  };

  const filteredProducts = products.filter(product => {
    return (
      (!filters.price || product.price <= filters.price) &&
      (!filters.brand || product.brand === filters.brand) &&
      (!filters.category || product.category === filters.category)
    );
  });

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input type="number" name="price" placeholder="Max Price" onChange={handleFilterChange} />
        <input type="text" name="brand" placeholder="Brand" onChange={handleFilterChange} />
        <input type="text" name="category" placeholder="Category" onChange={handleFilterChange} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;


