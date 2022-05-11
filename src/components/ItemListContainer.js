import * as React from 'react';
import { useEffect, useState } from 'react';
import produc from './Item';
import ItemList from './ItemList'
const ItemListContainer = () => {
  const[items,setItems]= useState([])

  useEffect(()=>{
    setTimeout(() => {
      

    const data = new Promise((resolve,reject)=>{
      resolve(produc)
    });
    data.then((data) =>{
      setItems(data);
    });
    data.catch((err)=>{
      console.log(err);
    })
  }, 2000);
  },[]);
  
  
  return(
    <div>
     <ItemList items={items}/> 

    </div>
  );
};


    export default ItemListContainer;