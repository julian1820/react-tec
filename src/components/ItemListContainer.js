import * as React from 'react';

const ItemListContainer = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};


    export default ItemListContainer;