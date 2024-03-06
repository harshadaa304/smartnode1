import React, { useState } from 'react';
import './contact us.css';

const ContactUs = () => {
  const [showLine] = useState(true);
    const [activeTab, setActiveTab] = useState('form1');
    const [formContainerSize, setFormContainerSize] = useState({
        width: '660px',
        height: '660px'
      });
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab === 'form2') {
            setFormContainerSize({
              width: '660px', // Adjust width as needed for form 2
              height: '350px', // Adjust height as needed for form 2
              
              
            });
          } else {
            setFormContainerSize({
              width: '660px', // Adjust width as needed for form 1
              height: '660px' // Adjust height as needed for form 1
            });
          }
    };

    return (
      <>
      <div className="image-container1">
                <img src={process.env.PUBLIC_URL + '/contact us.jpg'} alt="Image1" className="image1" />
                <div className="image-text">
                   <p> DO YOU HAVE A QUESTION? GET IN TOUCH</p>
                    <h4>We would love to hear from you anytime</h4>
                    {showLine && <div className="line"></div>}
                </div>
            </div>
            
       
  <div className="main-container" style={{ width: formContainerSize.width, height: formContainerSize.height }}>
        <div className="form-container">
                {/* Tab navigation */}
                <div className="tab-container">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'form1' ? 'active' : ''}`}
                                onClick={() => handleTabClick('form1')}
                            >
                                Home Automation Inquiry
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'form2' ? 'active' : ''}`}
                                onClick={() => handleTabClick('form2')}
                            >
                                Partnership Inquiry
                            </button>
                        </li>
                    </ul>
                </div>
                

                {/* Form 1 */}
                {activeTab === 'form1' && (
                    <form className="form row g-3">
                        <div className="col-12">
                            {/* Name field */}
                            <label htmlFor="inputAddress2" className="form-label">Name</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Name"required />
                        </div>
                        <div className="col-12">
                            {/* Email field */}
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" required/>
                        </div>
                        <div className="col-12">
          <label htmlFor="inputState" className="form-label">Automation For</label>
          <select id="inputState" className="form-select">
            <option selected>Independent House</option>
            <option>- Automation For</option>
            <option>Independent House</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Commercial</option>
            <option>Office</option>
            <option>Hotel</option>
            <option>Others</option>      
            </select> 
          </div>
          <div className="col-12">
          <label htmlFor="inputState" className="form-label">Project Type</label>
          <select id="inputState" className="form-select">
            <option selected>New Building</option>
            <option>New Building</option>
            <option>Existing</option>
            <option>Renovation</option>
            </select>
           <p> Control for ( you can select multiple option)</p>
            </div>
            <div className="row">
            <div className="col-md-6"> 
                <div className="form-check d-flex align-items-center"> 
                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                <label className="form-check-label" htmlFor="gridCheck1">Lighting & Scene Control</label>
                </div>
            </div>
            <div className="col-md-6"> 
            <div className="form-check d-flex align-items-center"> 
                <input className="form-check-input" type="checkbox" id="gridCheck2" />
                <label className="form-check-label" htmlFor="gridCheck2">Safety & Security Control</label>
                </div>
                </div>
                </div>
                <div className="row">
            <div className="col-md-6"> 
                <div className="form-check d-flex align-items-center">
                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                <label className="form-check-label" htmlFor="gridCheck1">Curtain & Appliances Control</label>
                </div>
            </div>
            <div className="col-md-6"> 
            <div className="form-check d-flex align-items-center"> 
                <input className="form-check-input" type="checkbox" id="gridCheck2" />
                <label className="form-check-label" htmlFor="gridCheck2">Home Theatre System</label>
                </div>
                </div>
                </div>
                <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Contact Number</label>
          <input type="number" className="form-control" id="inputAddress2" placeholder="Contact Number"required />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">City</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="City"required />
        </div>

                        <div className="col-12">
                            {/* Submit button */}
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                )}


                {/* Form 2 */}
                {activeTab === 'form2' && (
                    
                     
                    <form className="form form2 row g-3">
                        <div class="col-md-6">
            <label for="inputName" class="form-label">Your Full Name </label>
                <input type="text" class="form-control" id="inputName"required/>
                            </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Your Phone Number</label>
                 <input type="number" class="form-control" id="inputAddress"required/>
                        </div>
                        <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4"required/>
                     </div>
                     <div class="col-md-6">
                 <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity"required/>
                    </div>
                    <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">Choose Partnership type</label>
          <select id="inputState" className="form-select">
            <option selected>Distributor</option>
            <option>Distributor</option>
            <option>Dealer</option>
            <option>Architect</option>
            <option>Interior Designer</option>
            <option>Installer</option>
            <option>Developer</option>
            <option>Other</option>     
            </select> 
            </div>
            <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">How did you hear about us?</label>
          <select id="inputState" className="form-select">
            <option selected>Google</option>
            <option>Google</option>
            <option>Facebook</option>
            <option>Instagram</option>
            <option>News/Media</option>
            <option>Installer</option>
            <option>Other</option>   
            </select> 
            </div>
            <div className="col-12">
                            {/* Submit button */}
                            <button type="Send" className="btn btn-primary">Send</button>
                        </div>
                        
                        
                  </form>
                  
                
                
                )}
                <div className="right-side-container">
                  <div className="text-right">
                  <span className="address-label">Address</span><br/>
    <span className="address-text">
      A-09-02-B, Kamdhenu Industrial Estate,<br/> Opp. Gorwa Water Tank , Gorwa,<br/> Vadodara – 390016
    </span>
    <br /><br/>
    <span className="address-label">Customer Care</span><br/>
    <span className="address-text">
    +91-90169 61087
    </span><br/><br/>
    <span className="address-label">Sales & Marketing</span><br/>
    <span className="address-text">
    +91-9023725594
    </span><br/><br/>
    <span className="address-label">Technical Support</span><br/>
    <span className="address-text">
    +91-93279 58744/43
    </span><br/><br/>
    <span className="address-label">Write to Us </span><br/>
    <span className="address-text">
    info@smartnode.in
    </span><br/><br/>

  </div>
</div>
            </div>
            </div>
            {/* <iframe
                        title="Google Map"
                        width="600"
                        height="450"
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJN1t_tDeuEmsRUsoyG83frY4&key=YOUR_API_KEY"
                    />
            */}
        
  
    </>
    );
}

export default ContactUs;

