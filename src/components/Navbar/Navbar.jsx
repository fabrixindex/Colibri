import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

function Navbar(){
    return(
        <nav className="nav-bar">

            <div className="nav-logo_contenedor"> 
                <img src="/img/logo-rosa-colibri.png" alt="logo" className="nav-logo"/>
            </div>

            <ul className="nav-lista">
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">Sofas</a></li>
                <li className="nav-item"><a href="#">Organizadores</a></li>
                <li className="nav-item"><a href="#">Sillas</a></li>
                <li className="nav-item"><a href="#">Colibri Ofertas</a></li>
                <li className="nav-item"><CartWidget/></li>
            </ul>
        </nav>
    );
}

export default Navbar;