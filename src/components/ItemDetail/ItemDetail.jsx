function ItemDetail( {producto} ){
    return(
        <div>
        <h1>{producto.title}</h1>
        <h3>{producto.category}</h3>
        <p>Precio: ${producto.price}</p>
        </div>
    );
}

export default ItemDetail;