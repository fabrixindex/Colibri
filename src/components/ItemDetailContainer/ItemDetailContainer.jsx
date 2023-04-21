import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
/*import productsfromdatabase from "../data/products";*/
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { getSingleItem } from "../../services/firestore";

function ItemDetailContainer() {
  const [producto, setProduct] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [id]);

  if (producto.length === 0){
    return(<Loader/>)
  }

  return(
  <ItemDetail producto={producto} />
  );
}

export default ItemDetailContainer;
