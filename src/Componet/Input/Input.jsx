import React,{useState, useRef} from "react";
import '../../App.css'
import R from '../Img/jinni.jpg'
  export  const Input = ({setCitieList}) => {  
  const [inputValue, setInputValue]=useState('')
  const inputref=useRef(null)
  

const handleOnchange = (Event) =>{
  setInputValue(Event.target.value)
}
const handleOnclick = ()=>{

    setCitieList((currentArray) => [...currentArray, inputValue]);
    setInputValue('')
    inputref.current.focus();
  }
  return(
    <div className="input">
        <input className="inp" onChange={handleOnchange} value={inputValue} ref={inputref}  />
        <button className="btn" onClick={handleOnclick}>+</button>

    </div>
 )
}
   


