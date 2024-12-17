import React, { useState, useEffect } from "react";

const Dashboard = () => {
  // Sample user data (you can integrate real user data from a backend API)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    pastOrders: [
      {
        orderId: "ORD123",
        products: [
          { name: "Hoodie", quantity: 1, price: 1199 },
          { name: "T-shirt", quantity: 2, price: 999 },
        ],
        totalAmount: 3197,
      },
      {
        orderId: "ORD124",
        products: [
          { name: "Cap", quantity: 1, price: 599 },
          { name: "Shorts", quantity: 1, price: 799 },
        ],
        totalAmount: 1398,
      },
    ],
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Account</h2>
      <div>
        <h3>Account Details</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
      <div>
        <h3>Past Orders</h3>
        {user.pastOrders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          user.pastOrders.map((order, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h4>Order ID: {order.orderId}</h4>
              <p>Total Amount: ₹{order.totalAmount}</p>
              <ul>
                {order.products.map((product, idx) => (
                  <li key={idx}>
                    {product.name} - Quantity: {product.quantity} - ₹{product.price}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
