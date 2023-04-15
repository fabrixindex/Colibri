import { useContext } from "react"
import { cartContext } from "../../context/cartContext"

function CartContainer() {
  const contex = useContext(cartContext);
  const cart = contex.cart;
  const getPriceInCart = contex.getPriceInCart;

  //HACER RENDERING CONDICIONAL

  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <p>precio: {item.price}</p>
          <p>Cantidad: </p>
        </div>
      ))}
      <span>El total de tu compra es: {getPriceInCart()} </span>
    </div>
  );
}

export default CartContainer;