import React from 'react'
import { Link } from 'react-router-dom';



export const Item = ({item}) => {
    const {nombre , precio, imagen}= item;
  return (
    <div>
      
            <img src={imagen} />
            <h5>{nombre}</h5>
            <p>{precio}</p>
          <Link to={`/item/${item.id}`}>
            <button>Detalles</button>
          </Link>
          
    </div>
    
  );

};
export default Item;