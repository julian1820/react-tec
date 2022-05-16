import * as React from 'react';
import { useEffect, useState } from 'react';
import {Traerproductos} from './ItemCont';
import ItemList from './ItemList'
import{useParams} from 'react-router-dom'

  const ItemListContainer = () => {
  const[items,setItems]= useState([])

  const {categoriaID} = useParams();

    
  useEffect(()=>{
    Traerproductos(categoriaID)
    .then((res)=>{
      setItems(res);
    })
    .catch((Error)=>console.log(Error));;
  },[categoriaID]);
  
  
  return(
    <div>
     <ItemList items={items}/> 

    </div>
  );
};


    export default ItemListContainer;