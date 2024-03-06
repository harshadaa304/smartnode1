import React from "react";
import "./product knx.css";
function ProductKnx() {
  return (
    <>
      <div className="background-container">
        <h1> KNX Automation</h1>
        <div className="background-text">
          <p>Take control of your home with our KNX Based Products</p>
        </div>
      </div>
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <div className="image1-container1">
              <img
                src={process.env.PUBLIC_URL + "/knx.png"}
                alt="Image2"
                className="image2"
              />
            </div>
            <div className="text">
              8 Channel Universal Actuator
              <br />
              <h6>Bus-powered KNX actuator</h6>
            </div>
          </div>
          <div class="col">
            <div className="image1-container1">
              <img
                src={process.env.PUBLIC_URL + "/knx.png"}
                alt="Image2"
                className="image2"
              />
            </div>
            <div className="text">
              12 Channel Universal Actuator
              <br />
              <h6>Bus-powered KNX actuator</h6>
            </div>
          </div>
          <div class="col">
            <div className="image1-container1">
              <img
                src={process.env.PUBLIC_URL + "/knx.png"}
                alt="Image2"
                className="image2"
              />
            </div>
            <div className="text">
              20 Channel Universal Actuator
              <br />
              <h6>Bus-powered KNX actuator</h6>
            </div>
          </div>
        </div>
      </div>
      {/* jdbvkjnx,mn ,mx,mc,mxznv,mnx,m */}
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <div className="image1-container1">
              <img
                src={process.env.PUBLIC_URL + "/knx2.png"}
                alt="Image3"
                className="image3"
              />
            </div>
            <div className="text">
              4 Fan Actuator
              <br />
              <p>
                It is bus-powered, can control fans with a 5-step speed, and is
                humming-free
              </p>
            </div>
          </div>
          <div class="col">
            <div className="image1-container1">
              <img
                src={process.env.PUBLIC_URL + "/knx2.png"}
                alt="Image3"
                className="image3"
              />
            </div>
            <div className="text">
              4 Dimmer Actuator
              <br />
              <p>
                It is bus-powered and uses phase-cut dimming technology to
                smoothly dim 4 individual loads
              </p>
            </div>
          </div>
          <div class="col">
            <div className="image1-container1">
              <img
                src={process.env.PUBLIC_URL + "/knx3.png"}
                alt="Image3"
                className="image3"
              />
            </div>
            <div className="text">
              8 Channel KNX Digital I/O
              <br />
              <p>
                Connect your i/o keypads seamlessly with our KNX I/O connector
              </p>
            </div>
          </div>
          <div class="col">
            <div className="image1-container1">
              <img
                src={process.env.PUBLIC_URL + "/knx4.png"}
                alt="Image3"
                className="image3"
              />
            </div>
            <div className="text">
              8 Module Bed Side Panel
              <br />
              <p>1 Socket, 1 USB, 1 C Type USB, 3 switch Fan Regulator</p>
            </div>
          </div>
        </div>
      </div>
      <div className="form3-container3">
        <div className="background-text2">Enquire about KNX Products</div>
        <form className="form-form3 row g-3">
          <div class="row g-3">
            <div class="col-sm">
              <input
                type="text"
                class="form3-control"
                placeholder="Name"
                aria-label="Name"
                required
              />
            </div>
            <div class="col-sm">
              <input
                type="email"
                class="form3-control"
                placeholder="Email"
                aria-label="Email"
                required
              />
            </div>
            <div class="col-sm">
              <input
                type="Numbers"
                class="form3-control"
                placeholder="Phone Number"
                aria-label="Phone Number"
                required
              />
            </div>
            <div class="col-sm">
              <input
                type="text"
                class="form3-control"
                placeholder="city"
                aria-label="City"
                required
              />
            </div>
            <div className="col-sm">
              <button type="submit" className="btn btn-primary3">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

    
    </>
  );
}

export default ProductKnx;
