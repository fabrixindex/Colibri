import "./Footer.css";

function Footer() {
  return (
    <footer id="body__footer">
      <section>
        <div className="caja-png">
          <figure>
            <div className="logo-footer">
              <img src={`/img/colibri-logo.png`} alt="Colibri" />
            </div>
          </figure>
        </div>

        <div className="grupo-1">
          <p className="textito-principal-grupo-1">SOBRE NOSOTROS</p>
          <p className="textito-secundario-grupo-1">
            Somos una empresa dedicada a la venta de muebles y objetos de
            decoración, buscamos aportar asequibilidad, diseño y comodidad a
            personas de todo el mundo.
          </p>
        </div>

        <div className="grupo-1">
          <p className="textito-redes">SIGUENOS EN NUESTRAS REDES</p>
          <div className="red-social">
            <div id="redes" className="fab fa-facebook"></div>
            <div id="redes" className="fab fa-instagram"></div>
            <div id="redes" className="fab fa-twitter"></div>
            <div id="redes" className="fab fa-youtube"></div>
            <div id="redes" className="fab fa-whatsapp"></div>
          </div>
        </div>
      </section>

      <section className="grupo-2">
        <small>
          © 2023. <b>COLIBRÍ.</b> - Todos los derechos reservados
        </small>
      </section>
    </footer>
  );
}

export default Footer;
