import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Item from "./components/Item/Item";
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>

      <div>

        <ItemListContainer>
          <Item/>
          <Item/>
          <Item/>
        </ItemListContainer>

      </div>

    </div>
  );
}

export default App;
