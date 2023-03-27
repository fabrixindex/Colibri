import { Link } from "react-router-dom";
import "./Item.css";

function Item(props) {
  return (
    <Link to={`/detalle/${props.id}`}>
      <div>
        <div id={props.id} className="card">
          <div className="card-header">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <span>New</span>
          </div>

          <div className="card-img">
            <img src="card-img.jpg" alt="..." />
            <i className="bx bx-heart"></i>
          </div>

          <div className="card-details">
            <div className="price">
              <p>Price</p>
              <strong>${props.price}</strong>
            </div>
            <div className="colors">
              <div className="selected">
                <i className="bx bx-check"></i>
              </div>
              <div>
                <i className="bx bx-check"></i>
              </div>
              <div>
                <i className="bx bx-check"></i>
              </div>
            </div>
          </div>

          <div className="card-sizes">
            <span className="selected">38</span>
            <span>39</span>
            <span>40</span>
            <span>41</span>
            <span>42</span>
            <span>43</span>
          </div>

          <div className="card-footer">
            <button>Ver detalle</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Item;
