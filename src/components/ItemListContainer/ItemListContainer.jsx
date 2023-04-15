import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import productsfromdatabase from "../data/products";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function getItems() {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsfromdatabase);
    }, 750);
  });

  return promesa;
}

function getItemsByCategory(categoryURL){
  const promesa = new Promise((resolve) => {

    setTimeout(() => {
      const filtro = productsfromdatabase.filter((item) => item.category === categoryURL);
      resolve(filtro)
    }, 500);

  });

  return promesa;
}

function ItemListContainer(){

    const [products, setProducts] = useState([]);
    const {categoryid} = useParams();

    useEffect(()=> {
      if(categoryid === undefined){

        getItems().then((respuesta) => {
            setProducts(respuesta);
        });
      }else{
        getItemsByCategory(categoryid).then((respuesta)=> 
          setProducts(respuesta)
        );
      }

    }, [categoryid]);

    if (products.length === 0){
      return(<Loader/>)
    }

    return(
            <ItemList products={products}/> 
    );
}

export default ItemListContainer;