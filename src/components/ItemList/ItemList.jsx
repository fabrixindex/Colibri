import ContenedorFlex from "../ContenedorFlex/ContenedorFlex";
import Item from "../Item/Item";
import products from "../../components/data/products"

function ItemList(){
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
            description={producto.description}
            />
            ))}
        </ContenedorFlex>
    )
}

export default ItemList;