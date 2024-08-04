import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MatrixEffect from "./components/MatrixEffect";
import PrivatePage from "./components/PRIVATE/PrivatePage";
import SalesPage from "./components/SALES/SalesPage";
import CheckoutPage from "./components/CHECKOUT/CheckoutPage";
import LoginPage from "./components/LOGIN/LoginPage";
// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

console.log(firebaseConfig)

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ position: "relative" }}>
      {/* Ensuring that the background is covered by other contents */}
      <MatrixEffect /> {/* This will run the Matrix background effect */}
      <BrowserRouter>
        <nav style={{ position: "relative", border: "2px solid red", zIndex: "1" }}>
          <Link to="/private">Private</Link> |
          <Link to="/sales">Sales</Link> |{" "}
          <Link to="/checkout">Checkout</Link>|{" "}
          <Link to="/login">Log in</Link>
        </nav>
        <Routes>
          <Route path="/private" element={<PrivatePage count={count} setCount={setCount} />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;