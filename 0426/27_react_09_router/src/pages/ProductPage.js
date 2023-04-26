import React from "react";
import ProductItem from "../components/ProductItem";

const ProductPage = ({ products }) => {
  return (
    <div className="ProductPage">
      <h1> 여기는 상품 몰고 페이지</h1>
      <div>
        {products.map((product) => {
          return <ProductItem product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductPage;
