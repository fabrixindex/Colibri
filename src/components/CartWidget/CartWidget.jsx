import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CartWidget() {
  const { getCountInCart } = useContext(cartContext);

  return (
    <div>
      {getCountInCart() > 0 ? (
        <>
          <span> {getCountInCart()} </span>
          <button type="button" className="btn btn-light">
            <i className="fas fa-shopping-cart fa-1x"></i>
          </button>
        </>
      ) : null}
    </div>
  );
}

export default CartWidget;
