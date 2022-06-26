import React,{useState,useContext} from 'react'
import { contexto } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import imagenes from './CartWidget'
import { db } from '../firebase/firebase'
import { collection,addDoc,serverTimestamp } from 'firebase/firestore'
import Messages from './messagesSucces/Messages'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Formik,Form}from 'formik'



const styles = {
	containerShop: {
		textAlign: 'center',
		paddingTop: 20,
	},
};

const initialState={
  name:'',
  phone:'',
  email:'',
}

const Cart = () => {


  const { carrito, borrarDelCarrito, precioTotal, totalItems,limpiarCarrito } = useContext(contexto)

  const[values,setvalues]=useState(initialState)
  const[ventasID,setVentasID]=useState('')

const handleOnChange= (e)=>{
const{value,name}=e.target;
setvalues({...values,[name]:value})
};
  
 const onSubmit= async ()=>{
  
  const docRef= await addDoc(collection(db,'Ventas'),{
    Buyer:{values},Items:totalItems,Date:serverTimestamp(),Total:precioTotal,
  });
  console.log('Document written with ID: ', docRef.id);
  setVentasID(docRef.id);
  setvalues(initialState)
  limpiarCarrito();
}



return (
    <>
      <div className='carritoTextContainer'>
        <h2>Carrito</h2>
        {carrito.length === 0 ? 
        <Link to="/" id="link"> 
          <img maxheight="150" src={imagenes.img1}></img>
          <p>Carrito Vacio, Ir a Inicio</p>
        </Link>: 
        
        <p>Productos:{totalItems}  <br/>Total: ${precioTotal}</p>
        }
      </div>


        <div>
        
<div style={styles.containerShop}>
  <Formik   


  >{({handleSubmit,handleBlur})=>(   
    <form id='formulario' className='FormContainer' onSubmit={handleSubmit} >
				<TextField
					placeholder='Name'
					style={{ margin: 10, width: 400 }}
					name='name'
					value={values.name}
					onChange={handleOnChange}
          onBlur={handleBlur}
				/>
				<TextField
					placeholder='Phone'
					style={{ margin: 10, width: 400 }}
					name='phone'
					value={values.phone}
					onChange={handleOnChange}
          onBlur={handleBlur}
				/>
				<TextField
					placeholder='Email'
					style={{ margin: 10, width: 400 }}
					name='email'
					value={values.email}
					onChange={handleOnChange}
          onBlur={handleBlur}
				/>

			</form>)}
     
      </Formik>
      </div>
        </div>
      {
        carrito.map((elemento) => {
          return( 
            
          <div key={elemento.producto.id} >
            <div key={elemento.producto.id} >
              <img src={elemento.producto.imagen} alt="" />
              <div className="cardTxt">
                <h4>{elemento.producto.nombre}</h4>
                <h5>${elemento.producto.precio}</h5>
                <p>Cantidad seleccionada: {elemento.cantidad}</p>
                <p>Precio total: ${elemento.producto.precio * elemento.cantidad}</p>
              </div>
              
              <Button variant="outlined" color="error" size="small"  onClick={() => borrarDelCarrito(elemento.producto.id)}>borrar</Button>

            </div>
          </div>) 
        }
        )}
      {carrito.length > 0 && <Button  variant="outlined" onClick={() => { onSubmit() }}>Finalizar Compra</Button>}
      {ventasID && <Messages ventasID={ventasID}/>}
    </>
  )
}


export default Cart;