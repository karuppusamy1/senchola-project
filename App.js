import React from 'react'; 
 import { Route, HashRouter as Router, Routes } from 'react-router-dom'; 
 import './App.css'; 
 import About from "./About"; 
 import Contact from './Contact';  
 import Navbar from './Navbar'; 
 function App() { 
  
   return ( 
     <> 
       <Router Router basename="/"> 
         <div> 
         <Navbar/> 
           <main> 
             <Routes> 
               <Route path="/about" element={<About />} /> 
               <Route path="/contact" element={<Contact />} />
             </Routes> 
           </main> 
         </div> 
       </Router> 
     </> 
   ); 
  
 } 
  
 export default App;