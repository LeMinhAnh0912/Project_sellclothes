import React from "react";
import "./ShoppingCart.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function ShoppingCart() {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

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
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}{" "}
        </tbody>
      </table>
      <div className="cart-total">
        <h3>
          TOTAL: <span>{totalPrice}</span>
        </h3>
        <button className="buy-now-btn">BUY NOW !!!!</button>
      </div>
    </div>
  );
}
