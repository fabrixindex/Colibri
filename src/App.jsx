import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.css";
/*import * as bootstrap from "bootstrap";*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryid" element={<ItemListContainer />} />

        <Route path="/detalle/:id" element={<ItemDetailContainer />} />

        <Route path="*" element={<h1>Error 404. Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
