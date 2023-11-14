import React, { useState } from 'react'; 
 import { NavLink } from 'react-router-dom'; 
 import './Navbar.css'; 
  
 const Navbar = () => { 
   const [isOpen, setIsOpen] = useState(false); 
  
   const toggleMenu = () => { 
     setIsOpen(!isOpen); 
   }; 
  
  
  
   return ( 
     <nav className="navbar"> 
       <div className="navbar-brand">Senchola university<span className='text text-success'>.</span></div> 
       <div className={`navbar-menu ${isOpen ? 'active' : ''}`}> 
         <ul className="navbar-nav"> 
           
           <li className="nav-item"> 
             <NavLink to="/about" className="nav-link text-center" onClick={toggleMenu}>About</NavLink> 
           </li> 
          
           <li className="nav-item"> 
             <NavLink to="/contact" className="nav-link text-center" onClick={toggleMenu}>Contact Us</NavLink> 
           </li> 
          
           
          
         </ul> 
       </div> 
       
     </nav> 
   ); 
 }; 
  
 export default Navbar;