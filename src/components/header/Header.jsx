import React from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((acc, currentValue) => {
    return acc + currentValue.quantity;
  }, 0);
  return (
    <div>
      <div className="container">
        <div>
          <img className="vps" src="img.project\Sansa.png" alt="" />
        </div>
        <div className="menu">
          <div>
            <Link className="home" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="home" to="/productPage">
              Product
            </Link>
          </div>
          <div>
            <Link className="home" to="/about">
              About us
            </Link>
          </div>
        </div>
        <div className="header-icon">
          <div>
            <Link to="/search" className="user-icon">
              <SearchIcon />
            </Link>
          </div>
          <div>
            <Link to="/shopping" className="user-icon">
              {" "}
              <AddShoppingCartIcon />
              {totalQuantity}
            </Link>
          </div>
          <div>
            <Link to="/login" className="user-icon">
              <AccountCircleIcon />
            </Link>
          </div>
          <div id="current-email"></div>
        </div>
      </div>
    </div>
  );
}
