import React from 'react';
import './product SceneController.css';
function SceneController() {
  return (
    <>
    <div className="product-page">
      <div className="product-container">
        <h1>Smart Node Scene Controller</h1>
        <h5>Control your lights, music and entertainment with a single tap</h5>
        <form className="form-form4 row g-3">
          {/* <div class="row g-3"> */}
            <div class="col-2">
            <input type="numbers"class="form4-control"placeholder="Phone Number" aria-label="Phone Number"required/>
           </div>
            <div class="col-2">
              <input type="text"class="form4-control"placeholder="City" aria-label="City"required/>
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary4">
              Contact For live demo
              </button>
            </div>
            
            </form>
            </div>
      
      <div className="image-container4">
        <img src={process.env.PUBLIC_URL + '/Scene Controller.png'} alt="Image4" className="image4" />
      </div></div>
     
  
    </>
  );
}

export default SceneController
