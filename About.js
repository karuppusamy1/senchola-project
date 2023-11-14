import React from 'react' ;
 import About1 from './About1' ;
 import AboutProfile from './AboutProfile' ;
 import AboutServices from './AboutServices'; 
 import Footer from './Footer'; 
import './About.css';
 const About = () => { 
   return ( 
     <> 
     <div className='about-bg'> 
       <div className='bg-image'> 
  
       </div> 
  
       <div className='content'> 
        <h3><span>We</span> are the best company for <br/> 
         your business ready to take your  <br/>   brand sky high</h3> 
         <button>LEARN MORE</button> 
       </div> 
     </div> 
     
     <About1/> 
     <AboutServices/> 
     <AboutProfile/> 
     <Footer/> 
     </> 
   ) ;
 } ;
  
 export default About;