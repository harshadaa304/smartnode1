import React from 'react';
import './homepage.css';

const HomepageContainer = () => {
  return (
    <div className="home-page">
      <div className="text-container">
        <h1><b>Get everything you need to automate your home</b> </h1>
        <h6>A Wi-Fi Based Home Automation System For Any Home Automation Need</h6>
        <button className="button"><b>Get Your Customized Quote</b></button>
        {/* Add more text content here */}
      </div>
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/home page.png'} alt="Image" className="image" />
      </div>
    </div>
  );
}

export default HomepageContainer;
