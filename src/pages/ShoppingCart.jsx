import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ShoppingCart.css";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/slices/cartReducer";
export default function ShoppingCart() {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle payment
  const handlePayment = () => {
    let payment = JSON.parse(localStorage.getItem("cart")) || [];
    let data = {
      items: items,
      totalPrice: totalPrice,
      totalQuantity: totalQuantity,
    };
    payment.push(data);
    localStorage.setItem("cart", JSON.stringify(payment));
    alert("Thanh toán thành công");

    // Clear the cart in the Redux store
    dispatch(clearCart());

    // Navigate to home page
    navigate("/");
  };
  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Add more rows as needed */}
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}{" "}
        </tbody>
      </table>
      <div className="cart-total">
        <h3>
          TOTAL: <span>{totalPrice}</span>
        </h3>
        <button onClick={handlePayment} className="buy-now-btn">
          BUY NOW !!!!
        </button>
      </div>
    </div>
  );
}
