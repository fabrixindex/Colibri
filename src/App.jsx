import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.css";
/*import * as bootstrap from "bootstrap";*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";


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

          <Route path="*" element={<h1>Error 404. Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;