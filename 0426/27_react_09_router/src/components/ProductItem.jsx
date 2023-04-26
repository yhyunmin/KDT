import React from "react";

const ProductItem = ({ product }) => {
  return (
    <ul key={product.id}>
      <li>상품명: {product.name}</li>
      <li>상품설명: {product.body.slice(0, 80)}</li>
    </ul>
  );
};

export default ProductItem;
