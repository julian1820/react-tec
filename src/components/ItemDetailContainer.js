import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import produc from './ItemCont'
export const ItemDetailContainer = () => {

const {itemid} = useParams();
const oneProduc = produc.find((e) => e.id === Number(itemid));


return (
    <div>
        <ItemDetail product={oneProduc} />
    </div>
  )

}
export default ItemDetailContainer;