import React from 'react'
import "./checkout.css"
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <div className='container-gracias'>
      <img src="/img/gracias-por-tu-compra.jpg" alt="gracias-por-tu-compra" className='foto-gracias'/>
      
      <Link to="/"><button className='btn-checkout'>Volver al menu principal</button></Link>
      </div>
  )
}

export default Checkout