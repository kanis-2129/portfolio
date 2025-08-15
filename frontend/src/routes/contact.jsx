import React, { useState } from 'react'
import './contact.css'
import axios from "axios"


import linkedin from "../assets/linkedin.png"
import github from "../assets/github-logo.png"
import insta from "../assets/social.png"
const Contact = () => {
  const [name,setName] = useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage] = useState("")

  function handleName(evt)
  {
    setName(evt.target.value)
  }

  function handleEmail(evt)
  {
    setEmail(evt.target.value)
  }

  function handleMessage(evt)
  {
    setMessage(evt.target.value)
  }
  function send()
  {
   axios.get("http://localhost:3000",
{
      name:name,
      email:email,
      message:message})
  }

  
  return (
    <div>
      
      <div id='contact'>
        <h1>Contact Me</h1>
        <p>Please fill out form below to discuss any work oppurtunities</p>

        <div className="details">
          <input onChange={handleName} value={name} type="text" placeholder='Your name' /> <br />
          <input onChange={handleEmail} value={email} type="text" placeholder='Your Email' /> <br />
          <textarea onChange={handleMessage} value={message} type="text" placeholder='Your Message' />
        </div>
        <button onClick={send}>submit</button>

        <div className='contactProfiles'>
         <a href="https://www.linkedin.com/in/kaneeswari-k-1a6745292/">
         <img src={linkedin} alt="linkedin" /></a>

         <a href="https://github.com/kanis-2129">
          <img src={github} alt="github" /></a>
         
          <img src={insta} alt="insta" />
        </div>
      </div>
    </div>
  )
}

export default Contact