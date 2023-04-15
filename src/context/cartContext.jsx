import { createContext, useState } from "react";

const cartContext = createContext({ default: "default"});
const Provider = cartContext.Provider;

function CartProvider(props){

    const [cart, setCart] = useState([]);

    function addItem(producto, count){
        const newCart = [...cart];
        newCart.push({...producto, count})

        setCart(newCart);
    }

    function getPriceInCart(){
        //HACER FUNCION 
        //CANTIDAD * PRECIO
        return 999999;    
    }

    /* function getCountInCart(){
        let total = 0;
        cart.forEach()
        return 5;
    }*/

    return(
        <Provider value={{ cart, addItem, getPriceInCart }}>
        {props.children}
        </Provider>
    );
}

export { cartContext, CartProvider};
