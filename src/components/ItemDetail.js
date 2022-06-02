import React,{useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom';
import ItemCounts from './ItemCounts';
import { contexto } from '../Context/CartContext';



export const ItemDetail = ({product}) => {
  
  const CarritoContext= useContext(contexto)



  const onAdd = (unidades) => {
    CarritoContext.agregarAlCarrito(product,unidades)
    setIsLoading(false)

  }
  
  const [isLoading,setIsLoading]=useState(true);



  return (
    <div>
        <div>
            <img src={product.imagen} alt={product.nombre}/>
        </div>
        <div>
            <h3>{product.nombre}</h3>
            <h4>{product.precio}</h4>
                    
        {isLoading? <ItemCounts 
        stock={product.limit} 
        onAdd={onAdd}
        />:<Link to='/carrito'><button>carrito</button></Link>}
        
        </div>
    </div>
  )
}

export default ItemDetail;