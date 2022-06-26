
import React, {useState } from "react"; 
import Button from '@mui/material/Button';

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
        <section className="contenedorBtnCount">
        <div>
            <h1>Cantidad</h1>
            <p>Productos Seleccionados : {numero}</p>
            <Button variant="outlined" onClick={suma} >Suma</Button>
            <Button variant="outlined" onClick={resta}>RESTA</Button>
        </div>
        <Button variant="contained" size="small" onClick={confirmar}>Compra</Button>
        </section>
    );


  };
  
  
    export default ItemCounts;