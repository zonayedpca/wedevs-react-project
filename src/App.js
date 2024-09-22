import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// components for pages
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";

// components
import Header from "./components/Header/Header";

import "./App.css";
import { CartProvider } from "./context/CartContext";

// Initialize Query Client
const queryClient = new QueryClient();

function App() {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </CartProvider>
  );
}

export default App;
