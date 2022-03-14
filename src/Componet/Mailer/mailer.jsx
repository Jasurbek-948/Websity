import React,{useState,useRef} from 'react'
import emailjs from 'emailjs-com'
export const Mailer = () => {
  function sendEmail(e){
       e.preventDefault();
       emailjs.sendForm(
         'service_0ux0zva',
         'template_9gpbssc',
         e.target,
         'user_RaHvUwYDjD4isv5dbmmrC'
       ).then(res=>{
         console.log(res);
       }).catch(err=>console.log(err));
    }
 const[inputValue, setInputValue]=useState('')
 const onhanchange=(Event)=>{
   setInputValue(Event.value)
 }
 const onhandleclick =()=>{
   setInputValue('')
 }

  return (
    
    <div>
      <center>
      <form onSubmit={sendEmail} className="mailer">
         <label htmlFor="">mail</label><br />
        <input type="email" name='name' onChange={onhanchange} value={inputValue} /><br />
        <label htmlFor="">passwor</label><br />
        <input type="password" name='name' onChange={onhanchange} value={inputValue} /><br />
        <label htmlFor="">Message</label><br />
        <textarea name="message" id="" cols="30" rows="10" onChange={onhanchange} value={inputValue}></textarea><br />
        <input type="submit" value='send' onClick={onhandleclick}  />
      </form>
      </center>
    </div>
  )
}
