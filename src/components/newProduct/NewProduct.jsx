import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const newProduct = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/newProducts") // Cập nhật địa chỉ URL cho đúng với json-server của bạn
      .then((response) => {
        setNewProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div id="list-product">
      {newProducts.map((newProduct) => (
        <div key={newProduct.id} className="product-item">
          <img
            className="img-product-home"
            src={newProduct.image}
            alt={newProduct.name}
          />
          <h3>{newProduct.name}</h3>
          <p>Price: {newProduct.price}</p>
          <p>Description: {newProduct.description}</p>
          <Link to={`/detail/${newProduct.id}`}>
            <button>BUY NOW !!!!</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default newProduct;
