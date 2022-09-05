import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import {Badge} from '@mui/material';
import { useStateValue } from './../StateProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { getAuth } from 'firebase/auth';
import { actionTypes } from '../reducer';


function Copyright() {
  
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
  
        CyberZilla
     
      {new Date().getFullYear()}
     
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Products(   {id}
) {
 /*  const auth = getAuth(); */
  const navigate = useNavigate();
  const [{basket, user}, dispatch]=useStateValue();
  const handleAuth= ()=>{
if (user){
  auth.singOut();
  dispatch({
type: actionTypes.EMPTY_BASKET,
basket:[]
  })
  dispatch({
    type: actionTypes.SET_USER,
    user:null,
  })
  navigate("/")
}

  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
        
          <Typography paddingLeft={8} variant="h6" color="inherit" noWrap>
            <Link style={{textDecoration:"none", color:"white"}} to={"/"}>
            CyberZilla
            </Link>
          </Typography>
          <Typography paddingLeft={185}>
            Hello {user ? user.email : "Guest"}
          </Typography>
          <Typography >
            <Link style={{textDecoration:"none", color:"white"}} to={"/IniciarSesion" }>
             <Button variant="h6" color="inherit" onClick={handleAuth}>
              {user ? "Cerrar Sesion" : "Conectarse" }
              </Button>
             </Link>
          </Typography>
          <Typography>
           
              
             <IconButton aria-label='show cart items' color='inherit'>
             <Link style={{textDecoration:"none", color:"white"}} to={'/Carrito'}>
                  <Badge badgeContent={basket?.length} color='secondary'>
                    <ShoppingCart fontSize='large' color='white' />
                  </Badge>
                  </Link>
                </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
 
 
    </ThemeProvider>
  );
}