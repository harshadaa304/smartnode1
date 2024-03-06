import React from 'react';
import "./Footer.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className="footer-container" >
    <div style={{ backgroundColor: '#454545',color:'white'}}>
    <MDBFooter className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between '>
        
        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                PRODUCTS 
              </h6>
              <p>
                <a href='#!' className='text-reset'>
                  Lighting Automation
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  RGB Controller
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Curtain Controller
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  IR Blaster Remote
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Touch Switches
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  KNX
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>HELPs</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Contact
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Installation Video
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Download Brochure
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>More</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Blog
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Careers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Become Partner
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>CONNECT</h6>
              <br></br>
              <div style={{fontSize:'16px',color:'#a2a2a2'}}>
              A-09-02-B, Kamdhenu Industrial Estate,Opp. Gorwa Water Tank , Gorwa, Vadodara -390016
            </div>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className='d-flex justify-content-center justify-content-lg-between p-2 border-bottom'></section>
      <div className='text-center p-4' >
      
        <p className='text-no-underline'>© 2023 Smart Node. All rights reserved. Privacy Policy Terms of Use</p>
        <a href='#'><img src='/footer logo1.png' alt='Logo 1' className='logo-small' /></a>
    <a href='#'><img src='/footer logo 2.png' alt='Logo 2' className='logo-small' /></a>
        
      
      </div>
      
    </MDBFooter>
    
    </div>
    </div>
  
  );
}