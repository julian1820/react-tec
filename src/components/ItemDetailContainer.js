import React,{useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {db} from '../firebase/firebase'
import { collection, where, query, getDocs } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [itemDeProductos, setItemDeProductos] = useState({});

  const { itemid } = useParams()


  useEffect(() => {
    const productosCollection = collection(db, "productos");
      const miFiltro = query(productosCollection, where("id", "==", Number(itemid)))
      const documentos = getDocs(miFiltro)
      documentos
          .then(respuesta => setItemDeProductos(respuesta.docs.map(doc => doc.data())[0]))
          .catch((error) => {
              console.log("Error al obtener los productos");
          })
  }, [itemid]);


return (
    <div>
        <ItemDetail product={itemDeProductos} />

    </div>
  )

}
export default ItemDetailContainer;