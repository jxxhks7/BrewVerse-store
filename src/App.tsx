import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import CheckoutConfirmation from './pages/CheckoutConfirmation';
import CheckoutSuccess from './pages/CheckoutSuccess';
import { CartProvider } from './context/CartContext';
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-confirmation" element={<CheckoutConfirmation />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
        </Routes>
        <Toaster />
      </CartProvider>
    </Router>
  );
}

export default App;