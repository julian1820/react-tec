
import React, {useState } from "react"; 

const ItemCounts = (stock) => {
    const[numero,setNumero]= useState(1);

const suma = ()=>{
    if(numero==stock.limit){}
    else{
        setNumero(numero+1)
    }

};
const resta=()=>{
    
    if(numero==0){}
    else{
        setNumero(numero-1)
    }

}
    
    return(
        <section>
        <div>
            <h1>contador </h1>
            <p>{numero}</p>
            <button onClick={suma} >Suma</button>
            <button onClick={resta}>RESTA</button>
        </div>
        </section>
    );


  };
  
  
    export default ItemCounts;