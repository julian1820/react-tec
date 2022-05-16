import React, { useState,useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {Traerproduc} from './ItemCont'
import { useParams } from 'react-router-dom'
export const ItemDetailContainer = () => {
    const [product,setProduc]=useState({})
    


    useEffect(()=>{
    Traerproduc()
    .then((res)=>{
        setProduc(res);
    })
    .catch((Error)=>console.log(Error));


},[]);

return (
    <div>
        <ItemDetail product={product} />
    </div>
  )

}
export default ItemDetailContainer;