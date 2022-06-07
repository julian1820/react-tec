import * as React from 'react';
import { useEffect, useState } from 'react';
import {Traerproductos} from './ItemCont';
import ItemList from './ItemList'
import{useParams} from 'react-router-dom'
import { CardList } from './ItemCont';
import {db} from '../firebase/firebase'
import { collection, query, getDocs ,where} from "firebase/firestore";

const ItemListContainer = () => {


  const {categoriaID} = useParams();
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {

      if (!categoriaID) {

          const productosCollection = collection(db, "productos");
          const documentos = getDocs(productosCollection)

          documentos
              .then((respuesta) => setListaProductos(respuesta.docs.map(doc => doc.data())))
              .catch((error) => console.log("Error al obtener los productos"))

      } else {
          const productosCollection = collection(db, "productos")
          const miFiltro = query(productosCollection, where("categoria", "==", categoriaID))
          const documentos = getDocs(miFiltro)

          documentos
              .then((respuesta) => setListaProductos(respuesta.docs.map(doc => doc.data())))
              .catch((error) => console.log("Error al obtener los productos"))
      }

  }, [categoriaID])
  

console.log(listaProductos)
  
  return(
    <div>
     <ItemList items={listaProductos}/> 

    </div>
  );
};


    export default ItemListContainer;