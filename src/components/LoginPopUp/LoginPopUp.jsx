import React, { useState } from 'react'
import "./LoginPopUp.css"
import { useSearchParams } from 'react-router-dom'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("Log In")
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-inputs'>
               
            {currState==="Login"?<></>:<input type='text' placeholder='Your name' required>

                </input>}
                <input type='email' placeholder='Your Mail  ' required/>
            <input type='password 'placeholder='Password' required/>
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, iagree to the terms of use & privacy policy</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account ?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account ?<span onClick={()=>setCurrState("Login")}>Login here</span> </p>
        }
        </form>
      
    </div>
  )
}

export default LoginPopUp
