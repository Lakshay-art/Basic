import React, { useState } from 'react'
import Propsreciever from './Propsreciever' //have to import the component wher you want to send the data

//Parent
 function Sendingprops() {
     const[state,setState]=useState();
    const functioninparent=(textfromchild)=>{//text recieved here is the argument set for this parameter "textfromchild" in child;
    
     setState(textfromchild)
    }
       
  
    return (
        <>
        
        <Propsreciever idd="from parent to child" func={functioninparent}></Propsreciever> 
        {/* idd is a prop sent to a component named props reciever */}
        
        <p >{state}</p>
        </>
        )
}export default Sendingprops;
