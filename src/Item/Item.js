import React from 'react'

export const Item = ({item}) => {
    const {nombre , precio, imagen}= item;
  return (
    <div>
            <img src={imagen} />
            <h5>{nombre}</h5>
            <p>{precio}</p>
    </div>
  );
};
export default Item;