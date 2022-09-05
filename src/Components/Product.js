import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
/* import Button from '@mui/material/Button'; */
import Typography from '@mui/material/Typography';
import { accounting } from 'accounting';
import { render } from '@testing-library/react';
import products from './../product-data';
import { IconButton } from '@mui/material';
import { dispatch } from 'react';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
/* import { AddShoppingCart } from '@material-ui/icons'; */
import { AddShoppingCart } from '@material-ui/icons';




export default function Product({
  product: { id, name, productType, image, price, description },
}) {
const [{basket},dispatch]=useStateValue();
const addToBasket=()=>{
  dispatch({
    type : actionTypes.ADD_TO_BASKET,
    item:{
     id,
     name,
     productType,
     image,
     description,
     price,

    }
  })
} 
  return (
    
    <Card  sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="product"
        height="140"
        image= {image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
    {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      {description} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {accounting.formatMoney(price, "$")}
       </Typography>
       <IconButton aria-label='Add to Cart'  onClick={addToBasket} >
        
      <AddShoppingCart/>
        </IconButton>
      </CardContent>
      <CardActions>

      </CardActions>
      
    </Card>
    
  );
}
