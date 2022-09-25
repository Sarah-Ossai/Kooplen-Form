import React from 'react'
import './style.css' 
import YardIcon from '@mui/icons-material/Yard';
import Logo from './images/logo.png';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { NavLink } from 'react-router-dom'
function Login() {
  return (
    <div className='login'>
      <header className='header--dashboard'>
      <div className='logo--name'>
      <NavLink className='logo--name' to='/'><img src={Logo} alt="logo" className="logo"/> 
        <h1>KOOPLEN</h1></NavLink>
        </div>
         <div className='signup--login'>
         <YardIcon fontSize='large' className="yard--icon"/>
         </div>
    </header>
    <div className='login--wrap'>
    <div className='form--login'>
    <h1>Login Here</h1>
      <form className='login-form' >
        <div className='input--wrap'>
          <PersonIcon className='icon'/>
        <input type="text"  name="username" placeholder='Enter name e.g John Doe' required/>
        </div>
        <br/>
        <div className='input--wrap'>
        <EmailIcon className='icon'/>
        <input type="email"  name="email" placeholder='Enter email address' required/>
        </div>
        <br/>
        <div className='input--wrap'>
        <KeyIcon className='icon'/>
        <input type="password"  name="password" placeholder='Enter your password' required/>
        </div>
        <br/>
        <button id="btn--login">Let me in!</button>
      </form>
      <div className='create--member'>
        <p>Don't have an account yet</p>
        <p>Sign up <NavLink to='/signup' className="link"><b className='here'>HERE</b></NavLink></p>
      </div>
    </div>
    </div>
    </div>
  )
}


export default Login