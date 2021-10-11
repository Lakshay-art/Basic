import React from 'react'
//Child
const Propsreciever = (props) => { //props is recieved here as an object 
   props.func("datafromchild");
    return (
        <div>
            <h1>{props.idd}</h1> {/* getting the value of the props with id ="idd" */}
        </div>
    )
}
export default Propsreciever;