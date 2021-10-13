import React, { useEffect, useRef, useState } from 'react'
import {Jumbotron,Button,FormControl,Form,Row,Col} from 'react-bootstrap'
import Propsreciever from './Propsreciever';
export default function UseRefuseEffect() {
    
    const [state, setstate] = useState()
    
     const cityRef=useRef();//declaring an useRef;

    useEffect(() => {//this useEffect prints the state in console every time the state is changed automatically
        console.log(state);
    })

    useEffect(() => {//this useEffect prints the state in console only first time(initial value) .it prints "undefined" because at start the input is null(empty)
        console.log(state);
    },[])

    const submitt=(e)=>{
        e.preventDefault();
        setstate(cityRef.current.value)
    }

    return (
        <>
        <Jumbotron id="searchj" className="shadow" style={{ width:"30%", padding: "4px", margin: "auto",marginBottom:"20px", borderRadius: "30px", position: "absolute",top:"50%",left:"32%",height:"100px" ,zIndex: "101",minWidth:"150px" }}>
        <Form inline className=' mx-auto' style={{ width:"70%"}} onSubmit={submitt} >
            <FormControl id="searchf" type='text' placeholder='..' href="#" className='w-100 ' style={{ borderRadius: "25px" }} ref={cityRef} />
            <Button type='submit' className='invisible w-100'></Button>
            <Row style={{margin:"auto"}}><Col style={{padding:"2px"}}> <h4 style={{textAlign:"center",width:"40%",padding:"0px"}}>NAME</h4></Col>
            <Col  style={{padding:"2px"}}><Button type='submit' style={{fontSize:"10px",padding:"4px"}}>;)</Button></Col>
            </Row>
           
            
        </Form>
    </Jumbotron>
    <h1>{state}</h1>
    </>
    )
}
