import React from 'react';
import Services from './Services';
import doctor from './../assets/images/doctors.jpg'
import Typewriter from 'typewriter-effect';


const Home = () => {
    
    return (
          
        <div> 
           <div className="container">
          <Typewriter
         onInit={(typewriter) => {
         typewriter.typeString('<h4>Comilla Morden Hospital Medical Care In Your Home, Right When You Need It. We</h4>')
           .callFunction(() => {
             console.log('String typed out!');
           })
           .pauseFor(2500)
           .deleteAll()
           .callFunction(() => {
             console.log('All strings were deleted');
           })
           .start();
  }}
/> 
           </div>
          

          {/* banner design */}

         <div className="container">
         <div className="card bg-dark text-white">
          <img src={doctor} class="card-img" alt="..."/>
          <div className="card-img-overlay">
         <h5 className="card-title">service is provided by</h5>
         <p className="card-text">However, patients from anywhere else in the UK, or if you need more ... will be seen in the cardiology department at the Freeman Hospital.</p>
        <h3  className="card-text">The Freeman Hospital in Newcastle upon Tyne is an</h3>
        </div>
       </div>
    </div>


           <Services/>
        </div>
    );
};

export default Home;