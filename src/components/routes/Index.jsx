import React from "react";
import Login from "../login/Login";
import { Route, Routes } from "react-router-dom";
import Register from "../register/Register";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import SearchProduct from "../../pages/SearchProduct";
import Detail from "../detail/Detail";

export default function Index() {
  return (
    <Routes>
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/search" element={<SearchProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/productPage" element={<ProductPage />} />
    </Routes>
  );
}
