import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
  const initialProducts = [
    { id: 1, name: 'Laptop', price: '999', inStock: true },
    { id: 2, name: 'Phone', price: '699', inStock: false },
    { id: 3, name: 'Tablet', price: '499', inStock: true },
  ];
  // TODO: Implement state to manage filtering
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all');
  // TODO: Implement logic to filter products based on availability
  const filteredProducts =
    filter === 'inStock'
      ? products.filter((p) => p.inStock)
      : products;

  const handleRemove = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>

      <h1>{'Product Dashboard'}</h1>

      {/* TODO: Add buttons to allow filtering by availability */}
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setFilter('all')}>Show All</button>
        <button onClick={() => setFilter('inStock')}>Show In-Stock</button>
      </div>
      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;
