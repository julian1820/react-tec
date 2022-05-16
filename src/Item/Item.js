import React from 'react'
import { Link } from 'react-router-dom';
import produc from '../components/ItemCont';

export const Item = ({item}) => {
    const {nombre , precio, imagen}= item;
  return (
    <div>
            <img src={imagen} />
            <h5>{nombre}</h5>
            <p>{precio}</p>
            <Link to={`/Item/${produc.id}`}>Detalles</Link>
    </div>
  );
};
export default Item;