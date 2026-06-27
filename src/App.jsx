import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import "./App.css";

function Header() {
  const cart = useSelector((state) => state.cart.items);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="logo">FakeStore Shop</Link>
      <Link to="/cart" className="cart-badge">🛒 {cartCount}</Link>
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;