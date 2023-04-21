import "./CartContainer.css"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { createOrder } from "../../services/firestore";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import FormCheckout from "../FormCheckout/FormCheckout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function CartContainer() {
  const contex = useContext(cartContext);
  const {cart, getTotalPrice, getPriceInCart, removeItem, clearCart} = contex;
  const navigate = useNavigate()

  async function handleCheckout(userData){
    const order = {
      items: cart,
      buyer: userData,
      total: getTotalPrice(),
      date: new Date(),
    }
    const orderId = await createOrder(order)
    const orderComplete = await swal({
      title: "¡Gracias por su compra!",
      text: "Su compra se realizo correctamente. Su Ticket es: " + orderId,
      icon: "success",
    });

    clearCart()

    navigate(`/checkout/${orderId}`)

    return orderComplete;
  }

  return (
    <>
    <h1 className="title-cart-list">Tu Carrito</h1>

    <table className="tableCart">
      <thead className="cartList-encabezado">
        <tr className="cartList_row">
          <th>Miniatura</th>
          <th>Titulo</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Remover</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>

      {cart.length === 0 ? (
  <tr>
    <td colSpan="6" style={{ textAlign: "center" }}>
      El carrito esta vacio!
    </td>
  </tr>
) : (cart.map((item) => (
          <tr key={item.id} className="cartList_row">
            <td>
              <img className="img-cart-miniatura" src={`/img/${item.img}`} alt={item.title} />
            </td>
            <td>{item.title}</td>
            <td>$ {item.price}</td>
            <td>{item.count}</td>
            <td> <FontAwesomeIcon icon={faTrash} size="2xl" style={{color: "#ff0505", cursor: "pointer",}} onClick={() => removeItem(item.id)}/> </td>
            <th>$ {getPriceInCart(item.price, item.count)}</th>
          </tr>
       ))
       )}
      </tbody>
    </table>

    {cart.length > 0 &&(
    <div>
      <p className="total-text">El total de tu compra es: $ {getTotalPrice()} </p>
    </div>
     )
    }

    {cart.length > 0 &&(
      <FormCheckout onCheckout={handleCheckout}/>
    )
  }

  </>
  
  );
}

export default CartContainer;