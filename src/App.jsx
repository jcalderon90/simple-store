
import './App.css';

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from './context/AuthContext';
import { StoreProvider } from './context/StoreContext';
import { CartProvider } from './context/CartContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/layout/Header';
import Store from './pages/Store';
import Cart from './pages/Cart';
import Notification from './components/Notification';
import { useCart } from './context/CartContext';

function AppContent() {
  const { showNotification, setShowNotification } = useCart();

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <Notification
        show={showNotification}
        message="Se añadió el producto al carrito"
        onHide={() => setShowNotification(false)}
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <StoreProvider>
          <CartProvider>
            <AppContent />
          </CartProvider>
        </StoreProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
