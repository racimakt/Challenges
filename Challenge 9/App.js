import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <h1 className="logo">🛒 MyShop</h1>
        <nav>
          <Link to="/all-products">Produits</Link>
          <Link to="/shopping-cart">Panier</Link>
          <Link to="/checkout">Paiement</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/all-products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/shopping-cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
