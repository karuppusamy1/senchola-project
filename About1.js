import React from 'react' ;
 /*import {Button} from 'react-bootstrap'*/ 
 import 'bootstrap/dist/css/bootstrap.min.css' 
 import Team1 from './image1.jpg'; 
 import Team2 from './image2.jpg' ;
 import Team3 from './image3.jpg' ;
 const About1 = () => { 
   return ( 
     <div className='about-senchola'> 
          <div className='container'> 
             <div className='row'> 
                 <div className='col-md-4 col-sm-12 about'> 
                      <h2>About Senchola !</h2> 
                      <p>We are deeply invested in helping business focus on business, so our services 
                         are designed to be hassie-free. we adapt to your organization structure through 
                         freelauncing or outsourcing.relieving you of the roadblocks that inhibit your 
                         company's growth. 
                      </p> 
                      <p>No matter the scale of your needs, we outsource the exact number of business 
                         professionals or processes your company needs for sucess. our services grow easily 
                         with your business, ensuring your evolving needs are met. 
                      </p> 
                      <p>our professional resources and outsourcing services give your company the breadth 
                         and depth it needs to scale with speed from a single partner. Let your business needs 
                         fall on our broad expertise to drive growth. 
                      </p> 
                      <button className='btn btn-success'>VIEW MORE</button> 
                      
  
                     
                 </div> 
  
                 <div className='col-md-6 col-sm-12 d-flex three-img'> 
                      <div className='one-img'> 
                          <img src={Team1} className="img img-fluid" alt="team1"/> 
                      </div> 
                      <div className='two-img'> 
                          <img src={Team2} className="img img-fluid" alt="team2"/> 
                          <img src={Team3} className="img img-fluid" alt="team3"/> 
                      </div> 
                 </div> 
  
             </div> 
          </div> 
     </div> 
   ) ;
 } ;
  
 export default About1;