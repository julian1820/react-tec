import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import ItemCounts from './ItemCounts';




export const ItemDetail = ({product}) => {
  
  
  const onAdd = () => {
    
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
        limit={5} 
        onAdd={onAdd}
        />:<Link to='/carrito'><button>carrito</button></Link>}
        
        </div>
    </div>
  )
}

export default ItemDetail;