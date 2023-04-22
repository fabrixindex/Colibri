import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:categoryid" element={<ItemListContainer />} />

          <Route path="/detalle/:id" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<CartContainer />} />

          <Route path="/checkout/:orderid" element={<Checkout />} />

          <Route path="*" element={<h1>Error 404. Page not found</h1>} />
        </Routes>

        <Footer/>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;