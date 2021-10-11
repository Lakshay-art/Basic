import React from 'react'
import Propsreciever from './Propsreciever' //have to import the component wher you want to send the data

//Parent
export default function Sendingprops() {
    const functioninparent=(textfromchild)=>{
    document.getElementById("fromchild").innerText=textfromchild;
    }
    return (
        <>
        
        <Propsreciever idd="from parent to child" func={functioninparent}></Propsreciever> 
        {/* idd is a prop sent to a component named props reciever */}
        <p id="fromchild"></p>
        </>
        )
}
