import React from 'react';
import { useState, useEffect } from 'react';
import './about.css';

export default function About() {
  
  const [homesAutomated, setHomesAutomated] = useState(0);
  const [channelPartners, setChannelPartners] = useState(0);
  const [appUsers, setAppUsers] = useState(0);
  const [statesCovered, setStatesCovered] = useState(0);

  useEffect(() => {
    // Function to increment the values gradually
    const incrementValues = () => {
      setHomesAutomated((prevCount) => Math.min(prevCount + 50, 5000));
      setChannelPartners((prevCount) => Math.min(prevCount + 50, 250));
      setAppUsers((prevCount) => Math.min(prevCount + 50, 5000));
      setStatesCovered((prevCount) => Math.min(prevCount + 50, 5000));
    };

    // Increment values every second
    const intervalId = setInterval(incrementValues, 30);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
    
  return (
   <div className="aboutus-page">
      <div className="background-container2">
        <div className="overlay-container">
          <img src={process.env.PUBLIC_URL + '/aboutus.jpg'} alt="About Us Image" className="about-us-image" />
          <div className="text-container2">
            <h3>Home Automation Solution <br></br>Designed by ‘Us’ for ‘You’</h3>
            <h4>Integrated Smart Home Automation Solutions at<br></br> your fingertips!</h4>
          </div>
        </div>

        <div className="section">
  <div className="video-container">
  <iframe width="580" height="326" src="https://www.youtube.com/embed/vTSkC_ZlFfU" title="( Company Profile Film ) Smart Node - Discover the joy of smart living" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  

</div>
      </div>
      <div className="headline">
      <h2 >Our Vision & Mission</h2>
      </div>
      <div className='horizon'></div>
      <div className="container101">
        
          
      
      
      <div className="about1">
        <img
          src={process.env.PUBLIC_URL + '/vision.jpg'}
          
          className="image-about"
        />
        <div className='text-con9'>
        <h3><strong>Vision</strong></h3>
        <p>The purpose is to make the life of people<br></br> Smarter & Better.</p>
        </div>
      </div>
      <div className="about2">
        <img
          src={process.env.PUBLIC_URL + '/mission.jpg'}
          
          className="image-about"
        />
        <h3><strong>Mission</strong></h3>
        <p>The mission is to be the leading player in the <br></br>IoT-based Electrical industry.</p>
      </div>
    </div>

    <div className="headline" mx-6>
      <h2 >Our Core Value</h2>
      </div>
      <div className='horizon'></div>


      <div className="container101">
      
      <div className="about1">
        <img
          src={process.env.PUBLIC_URL + '/Integrity.webp'}
          
          className="image-about"
        />
        <h3>Integrity</h3>
      </div>
      <div className="about2">
        <img
          src={process.env.PUBLIC_URL + '/Innovation.webp'}
          
          className="image-about"
        />
        <h3>Innovation</h3>
      </div>
     <div className="about2">
        <img
          src={process.env.PUBLIC_URL + '/Collaboration.webp'}
          
          className="image-about"
        />
        <h3>Collaboration</h3>
      </div>
      <div className="about2">
        <img
          src={process.env.PUBLIC_URL + '/Empowerment.webp'}
          
          className="image-about"
        />
        <h3>Empowerment</h3>
      </div>
      <div className="about2">
        <img
          src={process.env.PUBLIC_URL + '/Patriotism.webp'}
          
          className="image-about"
        />
        <h3>Patriotism</h3>
      </div>
    </div>




    <div className="headline">
        <h2>Our Footprints</h2>
      </div>
      <div className='horizon'></div>
      <div className="container101">
        <div className="about1">
          <h1><strong>{homesAutomated.toLocaleString()}</strong></h1>
          <p>Homes Automated</p>
        </div>
        <div className="about2">
          <h1><strong>{channelPartners.toLocaleString()}</strong></h1>
          <p>Channel Partners</p>
        </div>
        <div className="about1">
          <h1><strong>{appUsers.toLocaleString()}</strong></h1>
          <p>App users</p>
        </div>
        <div className="about2">
          <h1><strong>{statesCovered.toLocaleString()}</strong></h1>
          <p>States Covered</p>
        </div>
      </div>





    <div className="founders-container">
      <h1>Meet the Founders</h1>
      <div className="founders">
        <div className="founder">
          <img
            src="Dhruv.jpg" 
            alt="Dhruv Patel"
            className="founder-image"
          />
          <h3>Dhruv Patel</h3>
          <p>
            Co-Founder, COO & Chief Decision Maker <br />
            Dhruv is the captain of our ship, a true leader who believes in
            giving opportunities to the youngsters and moulding them as future
            leaders.
          </p>
        </div>
        <div className="founder">
          <img
            src="parth.jpeg" 
            alt="Parth Shah"
            className="founder-image"
          />
          <h3>Parth Shah</h3>
          <p>
            Co-Founder and Chief Revenue Officer <br />
            When it comes to hitting milestones regularly, no one knows this
            game better than Parth. His dictionary starts and ends with the
            word growth.
          </p>
        </div>
      </div>
    </div>

    



    <div className="leaders-container">
      <h1>Meet the Leaders</h1>
      <div className="leaders">
        <div className="leader">
          <img
            src="pratik.jpg" 
            alt="Pratik"
            className="leader-image"
          />
          <h3>Pratik</h3>
          <p>
            Founding Team Member & CTO <br />
            If there would have been a school of learning magic in
            electronics, then Pratik would be its headmaster.
          </p>
        </div>
        <div className="leader">
          <img
            src="Durgesh.jpg" 
            alt="Durgesh"
            className="leader-image"
          />
          <h3>Durgesh</h3>
          <p>
            Lead - Software <br />
            When Durgesh designs software, he and his team approach
            the task as if they are playing a symphony.
          </p>
        </div>
        <div className="leader">
          <img
            src="Ravi.jpg" 
            alt="Ravi"
            className="leader-image"
          />
          <h3>Ravi</h3>
          <p>
            Lead - Production <br />
            Ravi is the youngest among the leaders but a very energetic guy
            who always finds unique ways to accomplish things.
          </p>
        </div>
        <div className="leader">
          <img
            src="udit.jpg" 
            alt="Udit"
            className="leader-image"
          />
          <h3>Udit</h3>
          <p>
            Lead - Digital Marketing <br />
            If juggling from one task to another is an art, then Udit is the Artist. He wears multiple hats in his marketing work.
          </p>
        </div>
        <div className="leader">
          <img
            src="Yash.jpg" 
            alt="Yash"
            className="leader-image"
          />
          <h3>Yash</h3>
          <p>
            Lead - Support & Training <br />
            Yash is a detail-oriented problem solver who always finds the right solution for each customer.
          </p>
        </div>
        <div className="leader">
          <img
            src="heli.jpg" 
            alt="Heli"
            className="leader-image"
          />
          <h3>Heli</h3>
          <p>
            Lead - HR & Admin <br />
            You can count on Heli to find the right talent and create an environment that fosters growth.
          </p>
        </div>
      </div>
    </div>
    <div className='backbone'>
    <div className='meet1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

      <h3><b>Meet the backbone of the<br></br> company</b></h3> <br></br>
      <p>We are here to help you make your <br></br>home smarter and a lot more<br></br> convenient.</p>
      <img src="smart-node-team-img4.jpg" alt="Company Image" style={{ maxWidth: '200px' }} />

       </div>

     </div>
      
   

    <div className="headline">
      <h2 >What we're all about</h2>
      </div>
      <div className="container101">
      
      <div className="about1">
        <img
          src={process.env.PUBLIC_URL + '/all about1.png'}
          
          className="image-about"
        />
        <p>Keep your home<br></br> and family safe</p>
      </div>
      <div className="about2">
        <img
          src={process.env.PUBLIC_URL + '/all about2.png'}
          
          className="image-about"
        />
        <p>Giving you more than<br></br>peace of mind​</p>
      </div>
      <div className="about2">
        <img
          src={process.env.PUBLIC_URL + '/all about3.png'}
          
          className="image-about"
        />
        <p>Giving you more than<br></br>peace of mind​​</p>
      </div>
    </div>

     </div>
    
      

    
  );
}