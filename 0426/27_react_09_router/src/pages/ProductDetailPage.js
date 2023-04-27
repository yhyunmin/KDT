import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetailPage = ({ products }) => {
  console.log("products", products);
  const { id } = useParams();
  console.log("params", id, typeof id); // '1'

  // 퀴즈

  // targetProduct 변수에 productId에 해당하는 상품 객체를 저장\

  // 힌트 filter()
  const [targetProduct] = products.filter(
    (product) => product.id === Number(id)
  );
  console.log(targetProduct);

  const navigate = useNavigate();
  if (!targetProduct) {
    return <main className="ProductDetailPage">존재하지 않는 상품입니다.</main>;
  }

  return (
    <main className="ProductPage">
      <h1> 여기는 상품 디테일 페이지</h1>
      <button onClick={() => navigate(-1)}>목록 보기</button>
      <button onClick={() => navigate("/")}>홈으로 이동하기</button>
      <h2>{targetProduct.name}</h2>
      <p>{targetProduct.body}</p>
      <p>{targetProduct.email}</p>
    </main>
  );
};

export default ProductDetailPage;
