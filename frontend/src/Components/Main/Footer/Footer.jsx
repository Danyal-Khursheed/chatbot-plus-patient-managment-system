import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content goes here */}
      <div className="flex-grow">
        {/* Your main content */}
      </div>
      <footer className="pt-20 bg-blue-300 footer">
        <div className="flex justify-center icon">
          <FontAwesomeIcon size="3x" className="mx-4 text-blue-600 cursor-pointer icon-hover" icon={faFacebook} />
          <FontAwesomeIcon size="3x" className="mx-4 text-blue-600 cursor-pointer icon-hover" icon={faInstagram} />
          <FontAwesomeIcon size="3x" className="mx-4 text-blue-600 cursor-pointer icon-hover" icon={faTwitter} />
        </div>
        <ul className="flex justify-center mt-5">
          <li className="mx-3 cursor-pointer">Home</li>
          <li className="mx-3 cursor-pointer">About</li>
          <li className="mx-3 cursor-pointer">Treatment</li>
          <li className="mx-3 cursor-pointer">Visit Us</li>
          <li className="mx-3 cursor-pointer">Login</li>
        </ul>
        <div className="p-4 mt-10 bg-blue-600">
          <h3 className="text-center">All Rights Reserved to Department of Computer Systems Engineering</h3>
        </div>
      </footer>
    </div>
  )
}

export default Footer