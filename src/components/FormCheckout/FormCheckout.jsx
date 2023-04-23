import { useState } from "react";
import "./FormCheckout.css";

function FormCheckout({ onCheckout }) {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    direccion: "",
  });

  function onInputChange(evt) {
    const inputText = evt.target.value;
    const inputName = evt.target.name;

    const newUserData = { ...userData };
    newUserData[inputName] = inputText;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    onCheckout(userData);
  }

  function clearFormData(evt) {
    evt.preventDefault();
    setUserData({
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      direccion: "",
    });
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <h3 className="form-title">
          Ingrese sus datos para completar la compra
        </h3>
        <div>
          <label className="input-form">Nombre</label>
          <input
            value={userData.nombre}
            name="nombre"
            type="text"
            placeholder="Nombre"
            required
            onChange={onInputChange}
          />
        </div>
        <div>
          <label className="input-form">Apellido</label>
          <input
            value={userData.apellido}
            name="apellido"
            type="text"
            placeholder="Apellido"
            required
            onChange={onInputChange}
          />
        </div>
        <div>
          <label className="input-form">Email</label>
          <input
            value={userData.email}
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={onInputChange}
          />
        </div>
        <div>
          <label className="input-form">Teléfono</label>
          <input
            value={userData.telefono}
            name="telefono"
            type="number"
            placeholder="Telefono"
            required
            onChange={onInputChange}
          />
        </div>
        <div>
          <label className="input-form">Direccion</label>
          <input
            value={userData.direccion}
            name="direccion"
            type="text"
            placeholder="Direccion"
            required
            onChange={onInputChange}
          />
        </div>

        <div className="container-btn-form">
          <button className="btn-cancelar" onClick={clearFormData}>
            Cancelar
          </button>
          <button
            className="btn-finalizar-compra"
            onClick={onSubmit}
            type="submit"
          >
            Finalizar Compra
          </button>
        </div>
      </form>
    </>
  );
}

export default FormCheckout;
