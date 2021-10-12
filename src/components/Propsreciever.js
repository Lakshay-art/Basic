import React, { useState } from 'react'
//Child
const Propsreciever = (props) => { //props is recieved here as an object 
    const[state,setState]=useState("Hello")//Hello is the assigned to the variable state initially ,setstate is a function used to change the state. 
  
   props.func(state+" NowsentbackfromChild");//text passed here as argument is recieved by parent;
    return (
        <div>
            <h1>{props.idd}</h1> {/* getting the value of the props with id ="idd" */}
             {/* as props.id is javascript so {} is used around it*/}
             <button onClick={()=>setState(props.idd)}>Send data to child and get it back to parent</button>
             {/* adding "()=>" infront makes it a callback fuction so that it works only when onclick event occurs. Without it,there will be infinite renders as it eill call itself automatically */}
        </div>
    )
}
export default Propsreciever;