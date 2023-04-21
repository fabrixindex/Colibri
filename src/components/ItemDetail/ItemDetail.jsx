import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function ItemDetail({ producto }) {
  const { addItem, getCountInCart } = useContext(cartContext);

  function onAddToCart(count) {
    addItem(producto, count);
  }

  const countInCart = getCountInCart(producto.id);

  return (
    <div className="container-detail">
      <div id={producto.id} className="cardd">
        <div className="cardd-img">
          <img src={`/img/${producto.img}`} alt="Imagen-producto-detalle" />
          <i className="bx bx-heart"></i>
        </div>

        <div className="card-details">
          <div className="card-header">
            <h3>{producto.title}</h3>
            <p>{producto.description}</p>
          </div>
          <div className="price">
            <p>Price</p>
            <p className="price-number">
              <strong>${producto.price}</strong> ARS
            </p>
          </div>
          <div>
            <p className="long-description">{producto.longDescription}</p>
          </div>
          <div>
            <ItemCount
              stock={producto.stock - countInCart}
              onAddToCart={onAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
