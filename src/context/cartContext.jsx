import { createContext, useState } from "react";

const cartContext = createContext({ cart: []});

function CartProvider(props){

    const [cart, setCart] = useState([]);
    const newCart = [...cart];

    function addItem(producto, countFromCounter){

        if (isItemInCart(producto.id)){
            const itemIndex = cart.findIndex((itemInCart) => itemInCart.id === producto.id);
            newCart[itemIndex].count += countFromCounter;
        }else{
            newCart.push({...producto, count: countFromCounter})
        }
        setCart(newCart);
    };

    function isItemInCart(id){
        return cart.some(itemInCart => itemInCart.id === id)
    }

    function getCountInCart(){
        return cart.reduce((total, item) => total + item.count, 0);
    }

    function removeItem(id){
        const filtro = cart.filter(itemInCart => itemInCart.id !== id)
        setCart(filtro)
    }

    function getPriceInCart (price, count){
        const totalCantidad = price * count;
        return totalCantidad.toLocaleString('es-ES');
    }

     function getTotalPrice(){
        let total = 0;
        cart.forEach((item) => {
          total += item.price * item.count;
        });
        return total.toLocaleString('es-ES');
    }

    function clearCart(){
        setCart([]);
    }

    return(
        <cartContext.Provider value={{ cart: cart, addItem, getPriceInCart, isItemInCart, getCountInCart, getTotalPrice, removeItem, clearCart}}>
            {props.children}
        </cartContext.Provider>
    );
}

export { cartContext, CartProvider};
