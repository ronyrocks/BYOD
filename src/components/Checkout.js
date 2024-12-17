import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cartItems, setCartItems] = useState([
    { name: "Hoodie", price: 1199, quantity: 1 },
    { name: "T-shirt", price: 999, quantity: 2 },
  ]);
  const navigate = useNavigate();

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderDetails = {
      name,
      email,
      address,
      phone,
      products: cartItems,
      totalAmount: getTotalAmount(),
      paymentMethod: "Cash on Delivery",
    };

    try {
      const response = await axios.post("https://your-backend.onrender.com/order", orderDetails);
      alert("Order placed successfully!");
      navigate("/my-account");  // Redirect to the dashboard after order placement
    } catch (error) {
      alert("Error placing the order!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: "10px", margin: "10px", width: "200px" }}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: "10px", margin: "10px", width: "200px" }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            style={{ padding: "10px", margin: "10px", width: "200px" }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{ padding: "10px", margin: "10px", width: "200px" }}
          />
        </div>
        <h3>Total Amount: ₹{getTotalAmount()}</h3>
        <button
          type="submit"
          style={{ padding: "10px 20px", backgroundColor: "yellow", color: "black" }}
        >
          Place Order (Cash on Delivery)
        </button>
      </form>
    </div>
  );
};

export default Checkout;
