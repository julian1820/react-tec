import React, {createContext,useState} from "react"



export const contexto = createContext()
const { Provider } =contexto
 


const ItemProvider = ({children})=>{
    const [items, setItems] = useState ();
    const [carrito, setCarrito] = useState([]);



    const isInCart = (producto) => {
        return carrito && carrito.some(item => item.producto.id === producto.id)
    }


    const agregarAlCarrito = (producto, cantidad) => {
        let cartProduct = {producto,cantidad}
    
        let carritoAux = []
        if(isInCart(producto)) {
            cartProduct = carrito.find(item => item.producto.id === producto.id)
            cartProduct.cantidad = cartProduct.cantidad + cantidad
            carritoAux = [...carrito]
        }else{
            carritoAux = [cartProduct, ...carrito]
        }
        return setCarrito(carritoAux)
        };


    const valorDelContexto = {
        agregarAlCarrito,
        isInCart

    };



    return(
        <Provider value={valorDelContexto}>

            {children}
        </Provider>
    )



}

export default ItemProvider;