import React from 'react'
//Child
const Propsreciever = (props) => { //props is recieved here as an object 
   props.func("datafromchild");//text passed here as argument is recieved by parent;
    return (
        <div>
            <h1>{props.idd}</h1> {/* getting the value of the props with id ="idd" */}
             {/* as props.id is javascript so {} is used around it*/}
        </div>
    )
}
export default Propsreciever;