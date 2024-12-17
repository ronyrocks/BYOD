import React from "react";

const ProductCard = ({ name, price, image }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", width: "200px", textAlign: "center" }}>
      <img src={image} alt={name} style={{ width: "100%" }} />
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
