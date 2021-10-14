import React, { useEffect, useRef, useState } from 'react'
import {Jumbotron,Button,FormControl,Form,Row,Col} from 'react-bootstrap'
import Propsreciever from './Propsreciever'
import $ from 'jquery'

export default function UseRefuseEffect() {
    
    const [state, setstate] = useState("^o^")
    
     const cityRef=useRef();//declaring an useRef;

    useEffect(() => {//this useEffect prints the state in console every time the state is changed automatically
        console.log(state);
    })

    useEffect(() => {//this useEffect prints the state in console only first time(initial value) .it prints "undefined" because at start the input is null(empty)
        console.log(state);
    },[])

    useEffect(()=>{
        document.getElementById("ff").innerHTML= `<h5 style={{padding:"1px",margin:"0px"}}>${state}</h5>`
    })

    const submitt=(e)=>{
        e.preventDefault();
        if(cityRef.current.value!="")
        setstate(cityRef.current.value.slice(0,2).toUpperCase())
        HideName();
    }
    const HideName = ()=>{
      //  $('#useName').animate({left:"20%"}, 100);
        $('#useName').animate({left:"103%"}, 800);
      //  $('#useName').focus()
    }
    const ShowName = ()=>{
       // $('#useName').animate({left:"33%"}, 800);
        $('#useName').animate({left:"27%"}, 800);
    }
    useEffect(()=>{
        
        ShowName()
    },[])
    return (
        <>
        <Jumbotron id="useName" className="shadow" style={{ width:"30%", padding: "4px", margin: "auto",marginBottom:"20px", borderRadius: "30px", position: "fixed",top:"50%",left:"-40%",height:"100px" ,zIndex: "101",minWidth:"150px" }}>
        <Form inline className=' mx-auto' style={{ width:"70%"}} onSubmit={submitt} >
            <FormControl id="searchf" type='text' placeholder='..' href="#" className='w-100 ' style={{ borderRadius: "25px" }} ref={cityRef} />
            <Button type='submit' className='invisible w-100'></Button>
            <Row style={{margin:"auto"}}><Col style={{padding:"2px"}}> <h4 style={{textAlign:"center",width:"40%",padding:"0px"}}>NAME</h4></Col>
            <Col  style={{padding:"2px"}}><Button type='submit'  style={{fontSize:"10px",padding:"4px"}}>;)</Button></Col>
            </Row>
           
            
        </Form>
    </Jumbotron>
    <button id="ff" type="button" class="btn btn-secondary btn-sm rounded-pill ml-auto" onClick={ShowName}>
        
          </button>
    
    </>
    )
}
