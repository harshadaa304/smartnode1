
import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { isSubmenuOpen: false };

    toggleSubmenu = () => {
        this.setState(prevState => ({
            isSubmenuOpen: !prevState.isSubmenuOpen
        }));
    };

    render() {
        return (
            
                <div className="navbar-container">
                    <Link to="/" className="logo-link">
    <img src={process.env.PUBLIC_URL + '/navbar logo.jpg'} alt="Logo" className="logo" />
</Link>
               
     
                
                <ul className="nav justify-content-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/about">
              About Us
            </Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                    <div className="btn-group" onMouseEnter={this.toggleSubmenu} onMouseLeave={this.toggleSubmenu}>
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Product</a>
                    <ul className={`dropdown-menu ${this.state.isSubmenuOpen ? 'show' : ''} dropdown-menu-end`}>
                    <li className="dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Lighting Automation</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Smart Device</a></li>
                                <li><a className="dropdown-item" href="#">Touch Panel</a></li>
                                <li><a className="dropdown-item" href="#">Touch Switch</a></li>
                            </ul>
                        </li>
                                <li><a className="dropdown-item" href="#">IR Blaster</a></li>
                                <li><a className="dropdown-item" href="#">Curtain Module</a></li>
                                <li><a className="dropdown-item" href="#">RGB Module</a></li>
                                <li><Link to="/product SceneController" className='dropdown-item'>Scene Controller</Link></li>
                                <li><Link to="/product knx" className='dropdown-item'>KNX</Link></li>
                            </ul>
                         </div>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/oursolutions">Our Solutions</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Our Solutions</a>
                    </li> */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">How it works</a>
                        <ul className="dropdown-menu">
                        <li><Link to="/SmartNodeApp" className='dropdown-item'>SmartNodeApp</Link></li>
                            <li><a className="dropdown-item" href="#">Third-Party Integration</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Resources</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Blog</a></li>
                            <li><a className="dropdown-item" href="#">Installation Videos</a></li>
                            <li><a className="dropdown-item" href="#">Datasheets</a></li>
                            <li><a className="dropdown-item" href="#">Manuals</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/contact us">Contact Us</Link>
                    </li>
                    {/* <button className="btn btn-primary" type="button" style={{ backgroundColor: '#07a89b',padding:'5px 40px',fontSize:'14px'}} >Become <br/>channel partner</button> */}
                    <Link to="/navbar button" className="link-styles">
                    <button className="rectangle-button">Become <br/>channel partner</button></Link>
                    
                </ul>
                
            </div>
            
            
        );     
    
        }
}


export default Navbar;

