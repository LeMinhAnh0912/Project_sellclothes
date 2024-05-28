import React from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
export default function Header() {
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
            <Link to="/search">
              <SearchIcon />
            </Link>
          </div>
          <div>
            <Link to="/shopping">
              <AddShoppingCartIcon />
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
