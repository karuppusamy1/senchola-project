import React from 'react' ;
 import Img1 from'./image4.jpg' ;
 import Img2 from './image5.jpg'; 
 import Img3 from './image6.jpg' ; 
 import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 import { faStar } from '@fortawesome/free-solid-svg-icons' 
 const AboutProfile = () => { 
   return ( 
     <div className='profile'> 
  
         <div className='container'> 
             <div className='row'> 
                 <div className='col-lg-3 col-md-3 box'> 
                      <img src={Img1} alt="Image1"/> 
                      <h3>Eleveny Petun</h3> 
                      <div className='star'> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      </div> 
                      <p>Lorem ipsum dolar sit amet consectetur.Proin pellentesque adipiscing auctor ipsum consequat egestas.
                      </p> 
                 </div> 
  
                 <div className='col-lg-3 col-md-3 box'> 
                      <img src={Img3} alt="Image1"/> 
                      <h3>Lenny Roria</h3> 
                      <div className='star'> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      </div> 
                      <p>Lorem ipsum dolar sit amet consectetur.Proin pellentesque adipiscing auctor ipsum consequat egestas.
                      </p> 
                 </div> 
  
                 <div className='col-lg-3 col-md-3 box'> 
                      <img src={Img2} alt="Image1"/> 
                      <h3>Ronny Rossy</h3> 
                      <div className='star'> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i> 
                      </div> 
                      <p>Lorem ipsum dolar sit amet consectetur.Proin pellentesque adipiscing auctor ipsum consequat egestas.
                      </p> 
                 </div> 
             </div> 
         </div> 
  
     </div> 
   ) ;
 } ;
  
 export default AboutProfile;