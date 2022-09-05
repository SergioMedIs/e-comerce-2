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
import { AddShoppingCart } from "@material-ui/icons";
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import {removeItem} from '../reducer';



export default function CheckoutCard({
  product: { id, name, productType, image, price, description },
  


}) {
  const [{basket},dispatch]=useStateValue();
  const removeItem =()=> dispatch({
    type: actionTypes.REMOVE_ITEM, id: id,
  })
  return (
    
    <Card  sx={{ maxWidth: 345 }}>
      <CardMedia
      aling="center"
        component="img"
        alt="product"
        height="140"
        image= {image}
      />
         <Typography align='center' gutterBottom variant="h5" component="div">
    {name}
        </Typography>

        <Typography fontSize={27} align='center' variant="body2" color="text.secondary">
          {accounting.formatMoney(price, "$")}
       </Typography>
       <IconButton  aria-label='Add to Cart' >
          <DeleteOutlineTwoToneIcon onClick={removeItem} align='center' fontSize='large' paddinLeft='45'/>
        </IconButton>
    
      <CardActions>

      </CardActions>
      
    </Card>
    
  );
}
