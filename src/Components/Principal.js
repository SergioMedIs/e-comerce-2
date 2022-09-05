import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ShoppingCart } from '@mui/icons-material';
import products from './../product-data';
import Product from './Product';
import { CardActionArea } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        CyberZilla
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Products(   {id}
) {
  return (
    <ThemeProvider theme={theme}>
      
      <main>
        {/* Hero unit */}
        <Box 
          sx={{
            
            bgcolor: 'background.paper',
            pt: 8,
            pb: 2,
          }}
          align='center'
        >
            <Card sx={{ maxWidth: 1400,  }} align='center'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="580"
          image="https://sergiomedis.github.io/Proyecto01-ventas/asset/hero-offerta2.png"
          alt="hero"
        />

      </CardActionArea>
    </Card>
          <Container maxWidth="sm">
 
     
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
               
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
   
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products.map(product=>(
        <Grid item xs={2} sm={4} md={4} >
        <Product key={product=id} product={product} />
        </Grid>
        ))}
          </Grid>
        </Container>
      </main>

    </ThemeProvider>
  );
}