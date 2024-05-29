import React from "react";
import { adjustQuantity, removeFromCart } from "../redux/slices/cartReducer";
import { useDispatch } from "react-redux";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleAdjustQuantity = (itemId, quantity) => {
    dispatch(adjustQuantity({ id: itemId, quantity }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };
  return (
    <tr>
      <td>
        {" "}
        <img
          src={item.image}
          alt={item.name}
          style={{ width: "150px", height: "150px" }}
        />
      </td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        <button
          onClick={() => handleAdjustQuantity(item.id, item.quantity - 1)}
          className="quantity-btn"
        >
          -
        </button>
        <span className="quantity">{item.quantity}</span>
        <button
          className="quantity-btn"
          onClick={() => handleAdjustQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
        <button
          onClick={() => handleRemoveItem(item.id)}
          className="remove-btn"
        >
          Delete
        </button>
      </td>
      <td>{item.quantity * item.price}</td>
    </tr>
  );
  {
    /* Add more rows as needed */
  }
}
