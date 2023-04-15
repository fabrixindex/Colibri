import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CartWidget(){

    const { cart } = useContext(cartContext);

    return(
        <div> 
            <span> {cart.length} </span>
            <button type="button" className="btn btn-light"><i className="fas fa-shopping-cart fa-1x"></i></button>
        </div>
    )
}

export default CartWidget;