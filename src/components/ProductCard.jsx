import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const { id, name, price, inStock } = product;

  const classes = [styles.card];
  if (!inStock) {
    classes.push(styles.outOfStockClass, 'outOfStockClass'); // module + plain name for tests
  }

  return (
    <div className={classes.join(' ')}>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};

export default ProductCard;
