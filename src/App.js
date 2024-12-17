import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import AboutUs from "./components/AboutUs";

import hoodieImage from './public/images/hoodie.jpg'; // Add your images in the public folder

const products = [
  { name: "Hoodie", price: 1199, image: hoodieImage },
  { name: "T-shirt", price: 999, image: hoodieImage },
  { name: "Shorts", price: 799, image: hoodieImage },
  // Add other products here...
];

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <h2 style={{ color: "yellow", textAlign: "center" }}>Welcome to BYOD</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>

      <Routes>
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
