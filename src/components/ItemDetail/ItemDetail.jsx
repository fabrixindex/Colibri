import "./ItemDetail.css";

function ItemDetail({ producto }) {
  return (
    <div>
      <div id={producto.id} className="card">
        <div className="card-header">
          <h3>{producto.title}</h3>
          <p>{producto.description}</p>
        </div>

        <div className="card-img">
          <img src="card-img.jpg" alt="Imagen-producto" />
          <i className="bx bx-heart"></i>
        </div>

        <div className="card-details">
          <div className="price">
            <p>Price</p>
            <strong>${producto.price}</strong>
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
      </div>
    </div>
  );
}

export default ItemDetail;
