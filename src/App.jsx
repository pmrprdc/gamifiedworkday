import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MatrixEffect from "./components/MatrixEffect"; // Make sure to import the MatrixEffect

// Components for your routes
import PrivatePage from "./components/PRIVATE/PrivatePage"; // Assume this is your current App component refactored
import SalesPage from "./components/SALES/SalesPage";
import CheckoutPage from "./components/CHECKOUT/CheckoutPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ position: "relative" }}>
      {"    "}
      {/* Ensuring that the background is covered by other contents */}
      <MatrixEffect /> {/* This will run the Matrix background effect */}
      <BrowserRouter>
        <nav style={{ border: "2px solid red", zIndex: "1" }}>
          <Link to="/private">Private</Link> | <Link to="/sales">Sales</Link> |{" "}
          <Link to="/checkout">Checkout</Link>
          <Link to="/checkout">Checkout2</Link>
        </nav>
        <Routes>
          <Route
            path="/private"
            element={<PrivatePage count={count} setCount={setCount} />}
          />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
