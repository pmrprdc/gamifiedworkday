import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Components for your routes
import PrivatePage from './components/PrivatePage'; // Assume this is your current App component refactored
import SalesPage from './components/SalesPage';
import CheckoutPage from './components/CheckoutPage';
import setupInputs from './components/ARCHIVES/setupInputs'

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <nav>
        {/* Navigation Links */}
        <Link to="/private">Private</Link> |{" "}
        <Link to="/sales">Sales</Link> |{" "}
        <Link to="/checkout">Checkout</Link>
      </nav>
      <Routes>
        <Route path="/private" element={<PrivatePage count={count} setCount={setCount} />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
