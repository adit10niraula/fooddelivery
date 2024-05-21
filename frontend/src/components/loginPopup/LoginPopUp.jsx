import React, { useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setshowlogin}) => {
    const [current , setcurrent] = useState("login")
  return (
    <div className='login-popup'>
        <form  className="login-popup-container"action="">
            <div className="login-popup-title">
              
                <h2>{current}</h2>
                <img onClick={()=>{setshowlogin(false)}} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {current === "login"?<></>: <input type="text" id="name" name="name" placeholder='Your name' required/>}
                
                <input type="email" name="email" id="email"  required placeholder='your email'/>
                <input type="password" name="email" id="password" required placeholder='Your password' />
            </div>
            <button>{current === "sign up"? "create account": "login"}</button>

            <div className="login-popup-condition">
                <input type="checkbox" name="chek" id="check" required/>
                <p>By countiuing , i agree to the term of use and provacy policy</p>

            </div>
            {current === "login"?  <p>Create a new account? <span onClick={()=>{setcurrent("sign up")}}>Click here</span></p>: <p>already had a account? <span onClick={()=>{setcurrent("login")}}>Login</span></p> }
           
            
        </form>
      
    </div>
  )
}

export default LoginPopUp
