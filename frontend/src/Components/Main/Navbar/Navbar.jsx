import React, { useState } from 'react';
import Bagh from '../../../../public/assets/images/logo.png';
import logo3 from '../../../../public/assets/img/logo3.png'
import './nav.css';
import { Link } from 'react-router-dom';
import Medbot from './../About/Medbot';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="p-2 text-3xl font-bold text-white bg-blue-300 cursor-pointer">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    {/* <img src={Bagh} alt="Logo" className="h-20 w-30" /> */}
                    <img src={logo3} alt="Logo" className="h-20 w-30" />
                </div>
                {/* Show navigation items only on desktop view */}
                <div className="items-center navitem">
                    <ul className='flex space-x-4'>
                    <li className="p-2 mx-3 border-animation">  <Link to="/">Home</Link> </li>
                    <li className="p-2 mx-3 border-animation">  <Link to="/about">About</Link> </li>
                    <li className="p-2 mx-3 border-animation">  <Link to="/medbot">Medbot</Link> </li>
                    <li  className="p-2 mx-3 border-animation">  <Link to="/treatment">Treatment</Link> </li>
                    <li className="p-2 mx-3 border-animation">  <Link to="/visit-us">Visit Us</Link> </li>
                    <li className="p-2 mx-3 border-animation">  <Link to="/login">Login</Link> </li>
                    </ul>
                </div>
                {/* Menu button for mobile view */}
                <div className="absolute md:hidden top-8 right-5" onClick={toggleMenu}>
                    <div className="space-y-2">
                        <div className="w-8 h-1 bg-white"></div>
                        <div className="w-8 h-1 bg-white"></div>
                        <div className="w-8 h-1 bg-white"></div>
                    </div>
                </div>

                
            </div>
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <div className="absolute md:hidden top-8 right-5" onClick={toggleMenu}>
                    <div className="space-y-2">
                        <div className="w-8 h-1 bg-white"></div>
                        <div className="w-8 h-1 bg-white"></div>
                        <div className="w-8 h-1 bg-white"></div>
                    </div>
                </div>
            <ul className="flex flex-col items-center justify-center h-full mt-2 space-y-2">
                        <li className="p-2 mx-3 border-animation">Home</li>
                        <li className="p-2 mx-3 border-animation">About</li>
                        <li className="p-2 mx-3 border-animation">Treatment</li>
                        <li className="p-2 mx-3 border-animation">Visit Us</li>
                        <li className="p-2 mx-3 border-animation">Login</li>
                    </ul>
            
            </div>
        </div>
    );
}

export default Navbar;
