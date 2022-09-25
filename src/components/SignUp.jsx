import React from 'react';
import './style.css';
import YardIcon from '@mui/icons-material/Yard';
import Logo from './images/logo.png';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {
  let history = useNavigate();
  useEffect(() => {
    const el = document.getElementById('create--btn');
     el.addEventListener('click', function(){
     history('/login');
        Swal.fire({
      title: 'Great Job!',
      text: 'You can login now!',
      icon: 'success',
      
    });
  }, []);
})
  
  
  return (
    <div className='signup'>
            <header className='header--dashboard'>
      <div className='logo--name'>
      <NavLink className='logo--name' to='/'><img src={Logo} alt="logo" className="logo"/>
        <h1>KOOPLEN</h1></NavLink> 
        </div>
         <div className='signup--login'>
         <YardIcon fontSize='large' className="yard--icon"/>
         </div>
    </header>
    <div className="signup--wrap">
    <div className='form--signup'>
    <h1>Create New Account</h1>
      <form className='signup-form' >
        <div className='input--wrap'>
          <PersonIcon className='icon'/>
        <input type="text"  name="username" placeholder='Enter name e.g John Doe' required/>
        </div>
        <br/>
        <div className='input--wrap'>
        <EmailIcon className='icon'/>
        <input type="email"  name="email" placeholder='Enter email address'required/>
        </div>
        <br/>
        <div className='input--wrap'>
        <KeyIcon className='icon'/>
        <input type="password"  name="password" placeholder='Use a strong password' required/>
        </div>
        <br/>
        <div className='input--wrap'>
        <KeyIcon className='icon'/>
        <input type="password"  name="cpassword" placeholder='Repeat Password' required/>
        </div>
        <br/>
        <button id="create--btn">Create Account</button>
      </form>
      <div className='already--member'>
        <p>Already a member?</p>
        <p>Login <NavLink to='/login' className="link"><b className='here'>HERE</b></NavLink></p>
      </div>
    </div>
    </div>
    </div>
  )

  }
export default SignUp