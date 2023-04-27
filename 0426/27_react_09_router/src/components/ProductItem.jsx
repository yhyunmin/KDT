import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const ItemList = styled.li`
  font-size: 26px;
  list-style: none;
  margin: 1rem;
  padding: 0.1rem;
  text-decoration: none;
  color: black;
`;

const ProductItem = ({ product }) => {
  return (
    <StyledLink to={`/products/${product.id}`}>
      <ItemList>상품명: {product.name}</ItemList>
      <ItemList>상품설명: {product.body.slice(0, 80)}...</ItemList>
    </StyledLink>
  );
};

export default ProductItem;
