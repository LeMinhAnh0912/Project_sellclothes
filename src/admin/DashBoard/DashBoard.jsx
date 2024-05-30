import React from "react";
import { Link } from "react-router-dom";
import "./DashBoard.css";
import { useState } from "react";
import ProductStatistics from "../productStatistics/ProductStatistics";
import UserStatistics from "../useStatistics/UseStatistics.jsx";
import PendingOrders from "../pendingOrders/PendingOrders";
export default function DashBoard() {
  const [activeItem, setActiveItem] = useState(null);
  const toggleItem = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">DashBoard</h1>
      <div className="dashboard-links">
        <Link to="#" className="link" onClick={() => toggleItem("product")}>
          Product
        </Link>
        <Link to="#" className="link" onClick={() => toggleItem("user")}>
          User
        </Link>
        <Link
          to="#"
          className="link"
          onClick={() => toggleItem("pendingOrders")}
        >
          Unit pending
        </Link>
        <Link to="/login" className="link">
          Log out
        </Link>
      </div>
      <div className="dashboard-content">
        {activeItem === "product" && <ProductStatistics />}
        {activeItem === "user" && <UserStatistics />}
        {activeItem === "pendingOrders" && <PendingOrders />}
      </div>
    </div>
  );
}
