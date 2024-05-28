import React from "react";
import NewProduct from "../components/newProduct/NewProduct";
import BestSelling from "../components/bestSelling/BestSelling";
export default function ProductPage() {
  return (
    <>
      <h1 className="homePage">Product</h1>
      <h2 className="h2-product">Best selling:</h2>
      <BestSelling />
      <h2 className="h2-product">New Product:</h2>
      <NewProduct />
    </>
  );
}
