import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  // TODO: Check if the product list is empty and display a message if needed
  if (products.length === 0) {
    return <p>No products in stock.</p>;
  }

  return (
    <div>
      {/* TODO: Iterate over the products array and render a ProductCard for each product */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default ProductList;
