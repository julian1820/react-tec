import React from 'react'
import ItemCounts from './ItemCounts';

export const ItemDetail = ({product}) => {
  
  return (
    <div>
        <div>
            <img src={product.imagen} alt={product.nombre}/>
        </div>
        <div>
            <h3>{product.nombre}</h3>
            <h4>{product.precio}</h4>
                    
        <ItemCounts 
        limit={5}
        />
        </div>
    </div>
  )
}

export default ItemDetail;