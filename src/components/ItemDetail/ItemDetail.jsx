import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function ItemDetail({ producto }) {

  const { cart, addItem } = useContext(cartContext);
  /*const { addedToCart, setAddedToCart} = useState(false);*/

  console.log("cart", cart);
  
  function onAddToCart(count){
    addItem(producto, count);
  }

  return (
    <div>
      <div id={producto.id} className="card">
        <div className="card-header">
          <h3>{producto.title}</h3>
          <p>{producto.description}</p>
        </div>

        <div className="card-img">
          <img src={`/img/${producto.img}`} alt="Imagen-producto-detalle" />
          <i className="bx bx-heart"></i>
        </div>

        <div className="card-details">
          <div className="price">
            <p>Price</p>
            <strong>${producto.price}</strong>
          </div>
          <div className="colors">
            <div className="selected">
              <i className="bx bx-check"></i>
            </div>
            <div>
              <i className="bx bx-check"></i>
            </div>
            <div>
              <i className="bx bx-check"></i>
            </div>
          </div>
        </div>
        <div>
        <ItemCount onAddToCart={onAddToCart}/>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
