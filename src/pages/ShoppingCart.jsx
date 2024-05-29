import React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart() {
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
          <tr>
            <td>Product 1</td>
            <td>Product 1 Name</td>
            <td>$100</td>
            <td>
              <button className="quantity-btn">-</button>
              <span className="quantity">1</span>
              <button className="quantity-btn">+</button>
            </td>
            <td>$200</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      <button>BUY NOW !!!!</button>
    </div>
  );
}
