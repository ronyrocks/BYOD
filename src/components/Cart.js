import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  // Sample cart data (you can modify this based on your application's state management)
  const [cartItems, setCartItems] = useState([
    { name: "Hoodie", price: 1199, quantity: 1 },
    { name: "T-shirt", price: 999, quantity: 2 },
  ]);

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Your Cart</h2>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <h3>Total: ₹{getTotalAmount()}</h3>
      <Link to="/checkout">
        <button style={{ padding: "10px 20px", backgroundColor: "yellow", color: "black" }}>
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default Cart;
