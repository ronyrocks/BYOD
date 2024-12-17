import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"; // Import your main App component

// Import global styles (if you have any)
import "./index.css";

// Create a root element to render your app into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped with Router for routing functionality
root.render(
  <Router>
    <App />
  </Router>
);
