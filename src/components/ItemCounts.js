
import React, {useState } from "react"; 

const ItemCounts = ({stock,onAdd}) => {
    
    
const[numero,setNumero]= useState(1);

const suma = ()=>{
    if(numero===stock){}
    else{
        setNumero(numero+1)
    }

};
const resta=()=>{
    
    if(numero===0){}
    else{
        setNumero(numero-1)
    }

}

const confirmar = () => {
    onAdd(numero)
}
    
    return(
        <section>
        <div>
            <h1>contador </h1>
            <p>Productos Seleccionados : {numero}</p>
            <button onClick={suma} >Suma</button>
            <button onClick={resta}>RESTA</button>
        </div>
        <button onClick={confirmar}>Compra</button>
        </section>
    );


  };
  
  
    export default ItemCounts;