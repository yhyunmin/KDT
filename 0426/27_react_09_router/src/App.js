import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/Common.scss";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";
import Axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await Axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setProducts(res.data.slice(0, 10));
    };
    getProducts();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/products/:id"
            element={<ProductDetailPage products={products} />}
          />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
