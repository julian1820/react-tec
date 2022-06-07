import React,{useState,useEffect} from "react";
import {db} from '../firebase/firebase'
import { collection, query, getDocs ,where} from "firebase/firestore";
import { async } from "@firebase/util";

 const produc = [
        { id: 1, nombre: 'Apple Audífonos Airpods Pro',
        imagen:'https://i.blogs.es/e98029/024c1c95-5db4-46b3-8749-eac0336a8af6/450_1000.jpeg' ,
        categoria: 'celulares', precio: 1000,
        limit:6 },
        { id: 2, 
        nombre: 'Iphone Smartphone 8 - 64Gb Plata',
        imagen:'https://i.ebayimg.com/images/g/LwYAAOSwc2FaGbN~/s-l1600.jpg', 
        categoria: 'celulares', 
        precio: 2000,
        limit:3 },
        { id: 3, 
        nombre: 'Samsung Barra de Sonido - T450',
        imagen:'https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/pdp/09-09-2020/t450/gallery01-1600x1200.jpg?$product-details-jpg',
        categoria: 'sonido', 
        precio: 500,
        limit:5 }

    ]

export const CardList=()=>{
    const [albumsData, setAlbumsData] = useState([]);
    useEffect(() => {
		const getAlbums = async () => {
			const q = query(collection(db, 'productos'));
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});

			setAlbumsData(docs);
		};
		getAlbums();
		
	}, []);

}




 /*   export const Traerproductos =(cat) =>{
        
        return new Promise ((resolve,reject)=>{
            
            const producFiltro = produc.filter(
                (prod)=>prod.categoria === cat
            );
                if (cat === undefined){
                    resolve(produc);
                }else{
                    resolve(producFiltro)
                }
            
        })
    }*/
    export const Traerproductos =(categoria) =>{
        const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {

        if (!categoria) {

            const productosCollection = collection(db, "db");
            const documentos = getDocs(productosCollection)

            documentos
                .then((respuesta) => setListaProductos(respuesta.docs.map(doc => doc.data())))
                .catch((error) => console.log("Error al obtener los productos"))

        } else {
            const productosCollection = collection(db, "db")
            const miFiltro = query(productosCollection, where("categoria", "==", categoria))
            const documentos = getDocs(miFiltro)

            documentos
                .then((respuesta) => setListaProductos(respuesta.docs.map(doc => doc.data())))
                .catch((error) => console.log("Error al obtener los productos"))
        }

    }, [categoria])
    
}

export default produc;





