// src/components/detail/Detail.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartReducer";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Detail.css";

export default function Detail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/items/${id}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy dữ liệu!", error);
      });
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    alert("Thêm vào giỏ hàng thành công");
    navigate("/");
  };

  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} />
      <div className="product-details">
        <h1>{item.name}</h1>
        <p>Price: {item.price}</p>
        <p>Description: {item.description}</p>
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to cart
        </button>
        <p className="quality-assurance">
          <CheckCircleIcon style={{ color: "green" }} />
          Sản phẩm chất lượng - uy tín
        </p>
        <p className="delivery-info">
          <AccessAlarmIcon />
          Giao hàng nhanh Từ 2 - 5 ngày
        </p>
        <p className="support-info">
          <SupportAgentIcon /> Hotline hỗ trợ : 0794715940
        </p>
      </div>
    </div>
  );
}
