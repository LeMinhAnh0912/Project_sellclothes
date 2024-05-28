import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListProduct.css";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products") // Cập nhật địa chỉ URL cho đúng với json-server của bạn
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div id="list-product">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img
            className="img-product-home"
            src={product.image}
            alt={product.name}
          />
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <Link to={`/detail/${product.id}`}>
            <button>BUY NOW !!!!</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
