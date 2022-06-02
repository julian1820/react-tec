import React from 'react'
import { useContext } from 'react'
import { contexto } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import imagenes from './CartWidget'


const Cart = () => {

const { carrito, borrarDelCarrito, precioTotal, totalItems } = useContext(contexto)


return (
    <>
      <div className='carritoTextContainer'>
        <h2>Carrito</h2>
        {carrito.length === 0 ? 
        <Link to="/" id="link"> 
          <img src={imagenes}></img>
          <p>Carrito Vacio, Ir a Inicio</p>
        </Link>: 
        <p>Productos:{totalItems}  <br/>Total: ${precioTotal}</p>
        }
      </div>

      {
        carrito.map((elemento) => {
          return( 
          <div key={elemento.producto.id} className='carritoItemContainer'>
            <div key={elemento.producto.id} id="cards">
              <img src={elemento.producto.img} alt="" />
              <div className="cardTxt">
                <h4>{elemento.producto.nombre}</h4>
                <h5>${elemento.producto.precio}</h5>
                <p>Cantidad seleccionada: {elemento.cantidad}</p>
                <p>Precio total: ${elemento.producto.precio * elemento.cantidad}</p>
              </div>
              <button  onClick={() => borrarDelCarrito(elemento.producto.id)}>borrar</button>

            </div>
          </div>) 
        }
        )}
      {carrito.length > 0 && <button>Finalizar Compra</button>}
    </>
  )
}


export default Cart;