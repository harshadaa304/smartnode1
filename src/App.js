import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import NavbarButton from './components/navbar button';
import Homepage from './components/homepage';
import OurSolutions from './components/OurSolutions';
import ContactUs from './components/contact us'; 
import ProductKnx from './components/product knx';
import SceneController from './components/product SceneController';
import Footer from './components/Footer';
import About from './components/about';
import SmartNodeApp from './components/SmartNodeApp';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/product knx' element={<ProductKnx/>}/>
          <Route path='/product SceneController' element={<SceneController/>}/>
          <Route path="/navbar button" element={<NavbarButton/>} />
          <Route path="/oursolutions" element={<OurSolutions />} />
          <Route path="/contact us" element={<ContactUs />} />
          <Route path='/SmartNodeApp' element={<SmartNodeApp/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
