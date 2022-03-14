import React, {useState} from 'react';
import './App.css';
import { Mailer } from './Componet/Mailer/mailer';
import {Cardlist} from './Componet/CardList/index'
import {Input} from './Componet/Input/Input';


function App() {
 
 
  const [citieList, setCitieList]=useState([]);
  return (

    <div className="App">
     
     <Input  setCitieList={setCitieList}/>
   <Cardlist citieList={citieList}/>
    
   <Mailer/>
  
   
    </div>
  );
}

export default App;
