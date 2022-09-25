import React from 'react';
import './style.css';
import YardIcon from '@mui/icons-material/Yard';
import Image from './images/image.jpg';
import Logo from './images/logo.png';
import { NavLink } from 'react-router-dom'
function Dashboard() {
  return (
    <div className='dashboard'>
    <header className='header--dashboard'>
      <div >
     <NavLink className='logo--name' to='/'><img src={Logo} alt="logo" className="logo"/>
        <h2>KOOPLEN</h2></NavLink> 
        </div>
         <div className='signup--login'>
         <YardIcon fontSize='large' className="yard--icon"/>
         <NavLink to='/signup'><button id='signup--btn'>Sign up</button></NavLink>
         <NavLink to='/login'><button id='login--btn'>Login</button></NavLink>
         </div>
    </header>
    <main>
        <img src={Image} alt=" " className='image-sitting'/>
        <div className="main--text"> 
        <h1>Welcome to Kooplen's Landing Page</h1>
        <p>Login/Sign up to get started</p>
        </div>
    </main>
    </div>
  )
}

export default Dashboard