import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Item = ({item}) => {

    const {nombre , precio, imagen}= item;
  return (
    <Card sx={{ margin: 5 }}>
    
      
            <CardMedia component='img' maxheight="100"  src={imagen} />
            <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {nombre}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              ${precio}
            </Typography>
          <Link to={`/item/${item.id}`}>
            <button>Detalles</button>
          </Link>
          </CardContent>
    
    </Card>
  );

};
export default Item;