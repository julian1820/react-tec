import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import ItemCounts from './ItemCounts';
import { contexto } from '../Context/CartContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const ItemDetail = ({product}) => {
  
  const CarritoContext= useContext(contexto)



  const onAdd = (unidades) => {
    CarritoContext.agregarAlCarrito(product,unidades)
    setIsLoading(false)

  }
  
  const [isLoading,setIsLoading]=useState(true);



  return (
    <Card sx={{ margin: 5 }}>
        <CardMedia component='img' maxheight="100" src={product.imagen} alt={product.nombre}/>
           
        <CardContent>
            <Typography>{product.nombre}</Typography>
            <Typography>${product.precio}</Typography>
            <Typography>Marca: {product.marca}</Typography>
            <Typography>Año {product.ano}</Typography>
        {isLoading? <ItemCounts 
        stock={product.limit} 
        onAdd={onAdd}
        />:<Link to='/carrito'><Button variant="contained">carrito</Button></Link> }{<Link to='/'><Button color="secondary">Seguir comprando</Button></Link>}
        
        </CardContent>
    </Card>
  )
}

export default ItemDetail;