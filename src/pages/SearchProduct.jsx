import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchProduct.css";
import { Link } from "react-router-dom";

export default function SearchProduct() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        className="ip-search"
        type="text"
        placeholder="Tìm kiếm sản phẩm"
        value={searchTerm}
        onChange={handleChange}
      />
      <div id="list-product">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="product-item">
              <img
                className="img-product-home"
                src={item.image}
                alt={item.name}
              />
              <h3>{item.name}</h3>
              <p>price: {item.price} </p>
              <p>{item.description}</p>
              <Link to={`/detail/${item.id}`}>
                <button>BUY NOW !!!!</button>
              </Link>
            </div>
          ))
        ) : (
          <p>Không tìm thấy sản phẩm</p>
        )}
      </div>
    </div>
  );
}
