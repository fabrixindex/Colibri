import { Link } from "react-router-dom";
import "./Item.css";

function Item(props) {
  return (
    <Link to={`/detalle/${props.id}`} className="card-link">
      <div>
        <div id={props.id} className="card">
          <div className="card-header">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>

          <div className="card-img">
            <img src={`/img/${props.img}`} alt="Imagen-producto" />
            <i className="bx bx-heart"></i>
          </div>

          <div className="card-details">
            <div className="price">
              <p>Price</p>
              <strong>${props.price}</strong>
              <div>
                {props.stock <= 1 ? (
                  <p style={{ color: "red", fontWeight: "bold" }}>
                    ¡Última unidad disponible!
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="card-footer">
            <button>Ver detalle</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Item;
