import React from 'react';
import './navbar button.css';

function NavbarButton() {
  return (
    <>
    <div className="text1-container1">
        <p>Become a Smart Node Channel Partner </p>
        </div>
    <div className='navbar-button-container'>
      <form className="form form2 row g-3">
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">Your Full Name</label>
          <input type="text" className="form-control" id="inputName"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputAddress" className="form-label">Your Phone Number</label>
          <input type="text" className="form-control" id="inputAddress"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity"/>
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
          <button type="Send" className="btn btn-primary2">Send</button>
        </div>
      </form>
    </div>
    
    </>
  );
}

export default NavbarButton;
