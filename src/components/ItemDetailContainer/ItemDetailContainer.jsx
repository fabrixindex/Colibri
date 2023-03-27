import React, { useState, useEffect } from "react";
/*import ItemDetail from "../ItemDetail/ItemDetail";*/
import { useParams } from "react-router-dom";
import productsfromdatabase from "../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";

function getSingleItem(idURL) {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemRequested = productsfromdatabase.find((item) => {
        return item.id === parseInt(idURL);
      });
      resolve(itemRequested);
    }, 500);
  });

  return promesa;
}

function ItemDetailContainer() {
  const [producto, setProduct] = useState([]);

  /* { id: num } */

  let { id } = useParams();

  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [id]);

  /* FALTA HACER return <ItemDetail .... /> */

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
