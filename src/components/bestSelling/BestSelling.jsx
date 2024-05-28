import React, { useEffect, useState } from "react";
import axios from "axios";
const BestSelling = () => {
  const [bestSellings, setBestSellings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/bestSellings") // Cập nhật địa chỉ URL cho đúng với json-server của bạn
      .then((response) => {
        setBestSellings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div id="list-product">
      {bestSellings.map((bestSelling) => (
        <div key={bestSelling.id} className="product-item">
          <img
            className="img-product-home"
            src={bestSelling.image}
            alt={bestSelling.name}
          />
          <h3>{bestSelling.name}</h3>
          <p>Price: {bestSelling.price}</p>
          <p>Description: {bestSelling.description}</p>
          <button>BUY NOW !!!!</button>
        </div>
      ))}
    </div>
  );
};

export default BestSelling;
