import React, { useState } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default function ItemCount({ onAddToCart }) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    if (count === 5) {
      const confirmation = swal({
        icon: "info",
        title: "¡ATENCIÓN!",
        text: "¡Estas sumando demasiados articulos al carrito!",
        timer: "2000",
      });
      if (confirmation) {
        setCount(count + 1);
      }
    } else {
      setCount(count + 1);
    }
  }

  function hadleSubstract() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <div className="count-flex">
        <p className="count-text">Cantidad: </p>
        <div className="counter-container">
          <button
            onClick={hadleSubstract}
            disabled={count === 1}
            className="btn-count"
          >
            <strong> - </strong>
          </button>

          <span className="count"> {count} </span>

          <button onClick={handleAdd} className="btn-count">
            <strong> + </strong>
          </button>
        </div>
      </div>

      <br />

      <Link to="/cart">
        <button
          onClick={() => onAddToCart(count)}
          className="btn-agregar-carrito"
        >
          Agregar al carrito
        </button>
      </Link>
    </div>
  );
}
