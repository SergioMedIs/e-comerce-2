import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Routes} from 'react-router-dom';
import { Route} from 'react-router-dom';
import Principal from './Components/Principal'
import SingIn from './Components/SingIn'
import SingUp from './Components/SingUp'
import CarCheck from './Components/CarCheck';
import Checkout from './Components/checkoutform/Checkout';
import { useEffect, dispatch } from 'react';
import { getAuth } from 'firebase/auth';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import { onAuthStateChanged } from 'firebase/auth'; 

function App() {
  
/*  const [{user, dispatch}]=useStateValue();
  const auth = user(); 
  useEffect(()=>{
    onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user : authUser,
        })
      }



    })
  },[])   */

  
  return (
    
    <div>
   <Navbar/>
   <Routes>
       <Route path="/" element={<Principal/>}/>
       <Route path="IniciarSesion" element={<SingIn/>}/>
       <Route path="Registrarse"element={<SingUp/>}/>
       <Route path="Carrito"element={<CarCheck/>}/>
       <Route path="Finaliza-tu-compra" element ={<Checkout/>}/>
   </Routes>   

    <Footer/>
       </div>
 

  );
}

export default App;
