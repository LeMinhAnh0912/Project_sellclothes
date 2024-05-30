import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authReducer";
export default function Header() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  const handleSignout = () => {
    localStorage.removeItem("USER");
    localStorage.removeItem("TOKEN");
    // Dispatch action logout
    dispatch(logout());
  };
  const handleInformation = () => {
    localStorage.removeItem("USER");
    localStorage.removeItem("TOKEN");
    // Dispatch action logout
    navigate("/information");
  };
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((acc, currentValue) => {
    return acc + currentValue.quantity;
  }, 0);
  return (
    <div>
      <div className="container">
        <div>
          <img className="vps" src="img.project/Sansa.png" alt="" />
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
            <Link className="home" to="/contact">
              Contact us
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
          {/* Nếu đã đăng nhập, hiển thị icon Logout */}
          {isLogin && (
            <>
              <div className="log-out-icon" onClick={handleSignout}>
                <LogoutIcon />
                <span>{localStorage.getItem("USER")}</span>
              </div>
            </>
          )}
          {/* Nếu chưa đăng nhập, hiển thị icon User */}
          {!isLogin && (
            <div>
              <Link to="/login" className="user-icon">
                <AccountCircleIcon />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
