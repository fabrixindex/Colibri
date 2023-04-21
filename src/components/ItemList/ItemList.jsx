import ContenedorFlex from "../ContenedorFlex/ContenedorFlex";
import Item from "../Item/Item";

function ItemList({products}){
    return(
        <ContenedorFlex>

            {products.map((producto) =>(

            <Item
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            category={producto.category}
            img={producto.img}
            stock={producto.stock}
            description={producto.description}
            longDescription={producto.longDescription}
            />
            ))}
        </ContenedorFlex>
    )
}

export default ItemList;