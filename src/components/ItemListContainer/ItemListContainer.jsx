import "./ItemListContainer.css";

function ItemListContainer(props){
    return(
        <div className="Item-list-container">{props.children}</div>
    )
}

export default ItemListContainer;