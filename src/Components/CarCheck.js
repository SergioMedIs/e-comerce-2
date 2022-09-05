import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import products from './../product-data'
import Product from './Product'
import id from './../product-data'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';

import CheckoutCard from './CheckoutCard' 
import {Link} from 'react-router-dom'
import Total from './Total'
import { useStateValue } from './../StateProvider';
import {basket} from './../reducer'


/* const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
})); */

export default function CarCheck() {
  const [{basket}]=useStateValue();

  return (
    <Box container Spacing={2} margin="45px" paddingTop={25} alignContent='left' sx={{ }}>
    <Grid container Spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {basket?.map(item=>(
        <Grid item xs={2} sm={4} md={4} >
        <CheckoutCard key={item=id} product={item} />
        </Grid>
        
        ))}
      
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>

  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >

  </Box>


  <React.Fragment>
    <CardContent alignContent='right'>
      <Typography float='right' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       TOTAL
      </Typography>
       <Total/>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        +iva
      </Typography>
      <Typography variant="body2">
       
        <br />
      
      </Typography>
    </CardContent>
    <CardActions> 
    </CardActions>
  </React.Fragment>



        </Grid>
   
      </Grid>


    </Grid>
  </Box>
  
);
}
   /*   <Box sx={{ flexGrow: 1 , margin:22}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      
        <Grid item xs={8}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography position="right" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          TOTAL
        </Typography>
        <Typography variant="h5" component="div">
        {accounting.formatMoney(price, "$")}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         mxn
        </Typography>
        <Typography variant="body2">
        el precio ya incluye iva
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
      </CardActions>
    </Card>


        <br/>
        </Grid>
        {products.map(product=>(
        <Grid item xs={2} sm={4} md={4} >
        <Product key={product=id} product={product} />
        </Grid>
        ))}
      </Grid>
    </Box> */

