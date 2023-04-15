import React, {useState} from 'react';
import "./ItemCount.css"
import { Link } from 'react-router-dom';

export default function ItemCount({onAddToCart}) {

    const [count, setCount] = useState(0);

    function handleAdd(){
        setCount(count + 1)
    }

    function hadleSubstract(){
      setCount(count - 1)
    }

  return (
    <div>
        <button onClick={hadleSubstract} className="btn-count"> 
        -
        </button>

        <span className="count"> <strong> {count} </strong> </span>

        <button onClick={handleAdd} className="btn-count"> 
        + 
        </button>

        <br />

        <Link to="/cart"><button onClick={onAddToCart} className="btn-agregar-carrito">Agregar al carrito</button></Link>
    </div>
  );
}
