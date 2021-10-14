import './App.css';


import { useState } from 'react';

import Propsreciever from './components/Propsreciever';
import Sendingprops from './components/Sendingprops';
import UseRefuseEffect from './components/UseRefuseEffect';
// import LogIn from './components/LogIn';

function App (){
  
 
        return (
            <div className="App">
               
       <Sendingprops/> 
       <UseRefuseEffect class="useName"/>
    </div>
          
    );
}

export default App;
