import React from "react";
import accounting from "accounting";
import { Button } from "@mui/material";
import {Link }from 'react-router-dom'
import {getBasketTotal} from './../reducer'
import { useStateValue}   from '../StateProvider';



export default function Total() {
    
    const [{basket}]=useStateValue();
    return (
        <div>

<h5>TOTAL :</h5>  
{accounting.formatMoney(getBasketTotal(basket),"$")}
           
       

<Link style={{textDecoration:"none", color:"white"}} to={"/Finaliza-tu-compra" }>

<Button size="small" variant="contained">Continuar</Button>
     </Link>
        </div>
        

    )
}


   