import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="nav-bar">
        <Link to="/">
          <div className="nav-logo_contenedor">
            <img
              src="/img/logo-rosa-colibri.png"
              alt="logo"
              className="nav-logo"
            />
          </div>
        </Link>

        <ul className="nav-lista">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Sofas">Sofas</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Organizadores">Organizadores</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Sillas">Sillas</Link>
          </li>
          <li className="nav-item">
            <Link to="#">Colibri Ofertas</Link>
          </li>
          <li className="nav-item">
            <CartWidget />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
