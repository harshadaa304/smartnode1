import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './OurSolution.css';

export default function App() {
  const [showText, setShowText] = useState(false);
  const [showSlideText, setShowSlideText] = useState(false);

  useEffect(() => {
    const carousel = document.getElementById('carouselExampleAutoplaying');
    carousel.addEventListener('slid.bs.carousel', handleSlideChange);
    
    // Remove event listener on component unmount
    return () => {
      carousel.removeEventListener('slid.bs.carousel', handleSlideChange);
    };
  }, []);

  const handleSlideChange = () => {
    // Trigger showing the text after a slide change
    setShowText(true);
    
    // Hide the text after some delay (e.g., 3 seconds)
    setTimeout(() => {
      setShowText(false);
    }, 3000);

    // Show slide-specific text after a slide change
    setShowSlideText(true);

    // Hide the slide-specific text after some delay (e.g., 2 seconds)
    setTimeout(() => {
      setShowSlideText(false);
    }, 3000);
  };

  return (
    <>
      <div className="text-container">
        <div className={`content ${showText ? 'fade-in' : ''}`}>
          <h2>We provide customized automation<br/> solution as per your needs</h2>
          <p>In recent times we associate with many hotels, hospitals and corporate <br/>places to deliver customized automation solution </p>
          <a href="/" className="button1">
            <b>Get Quote</b>
          </a>
        </div>
      </div>
      <div className="carousel-container" >
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={process.env.PUBLIC_URL + '/oursolution 1.jpg'} alt="Image" className="image zoom-in" />
              {showSlideText && (
              
                <div className="slide-text">
                 <b>Office Automation</b>
                 <div className="additional-text-box">
                    <div className="additional-text">
                      <p>Contact us for Demo</p>
                      </div>
                    </div>
                  </div>
                  
                 
                
              )}
            </div>
            <div className="carousel-item">
              <img src={process.env.PUBLIC_URL + '/oursolution 2.jpg'} alt="Image" className="image zoom-in" />
              {showSlideText && (
                <div className="slide-text">
                 <b>Hotel Automation</b>
                 <div className="additional-text-box">
                    <div className="additional-text">
                      <p>Contact us for Demo</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="carousel-item" >
              <img src={process.env.PUBLIC_URL + '/oursolution 3.jpg'} alt="Image" className="image zoom-in" />
              {showSlideText && (
                <div className="slide-text">
                 <b> Home Automation</b>
                 <div className="additional-text-box">
                    <div className="additional-text">
                      <p>Contact us for Demo</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="carousel-item">
              <img src={process.env.PUBLIC_URL + '/oursolution 4.jpg'} alt="Image" className="image zoom-in" />
              {showSlideText && (
                <div className="slide-text">
                 <b>Custom Requirement?</b>
                 
                 <div className="additional-text-box">
                    <div className="additional-text">
                       <p>Contact Our Team</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './OurSolution.css';

// export default function App() {
//   return (
//     <>
//    <div className="text-container">
//       <div className="content">
//         <h2>We provide customized automation<br/> solution as per your needs</h2>
//         <p>In recent times we associate with many hotels, hospitals and corporate <br/>places to deliver customized automation solution </p>
//         <a href="/" className="button1">
//   <b>Get Quote</b>
// </a>

//       </div>
//     </div>
//     <div className="carousel-container" >
//       <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src={process.env.PUBLIC_URL + '/oursolution 1.jpg'} alt="Image" className="image zoom-in" />
//           </div>
//           <div className="carousel-item">
//             <img src={process.env.PUBLIC_URL + '/oursolution 2.jpg'} alt="Image" className="image zoom-in" />
//           </div>
//           <div className="carousel-item" >
//             <img src={process.env.PUBLIC_URL + '/oursolution 3.jpg'} alt="Image" className="image zoom-in" />
//           </div>
//           <div className="carousel-item">
//             <img src={process.env.PUBLIC_URL + '/oursolution 4.jpg'} alt="Image" className="image zoom-in" />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
  
    
//     </>
//   );
// }
