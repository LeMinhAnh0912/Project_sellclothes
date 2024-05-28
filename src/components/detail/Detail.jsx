import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Detail.css";
export default function Detail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    console.log(`id: ${id}`);

    axios
      .get(`http://localhost:3000/items/${id}`)
      .then((response) => {
        console.log("Data fetched:", response.data);
        if (response.data) {
          setItem(response.data);
        } else {
          console.error("No item found with this ID");
        }
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy dữ liệu!", error);
      });
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div class="product-card">
      <img src={item.image} alt={item.name} />
      <div class="product-details">
        <h1>{item.name}</h1>
        <p>Price: {item.price}</p>
        <p>{item.description}</p>
        <div class="quantity-controls">
          <button className="decrease">-</button>
          <span>1</span>
          <button className="increase">+</button>
        </div>
        <button class="add-to-cart-btn">Add to cart</button>
        <p class="quality-assurance">
          <CheckCircleIcon style={{ color: "green" }} />
          Sản phẩm chất lượng - uy tín
        </p>
        <p class="delivery-info">
          <AccessAlarmIcon />
          Giao hàng nhanh Từ 2 - 5 ngày
        </p>
        <p class="support-info">
          <SupportAgentIcon /> Hotline hỗ trợ : 0794715940
        </p>
      </div>
    </div>
  );
}
