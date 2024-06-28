import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    
    <header className="bg-gray-100">
    <div className="container mx-auto flex justify-between items-center py-4">
      <div className="flex items-center">
      <div className="flexspace-x-4 ">
      <FontAwesomeIcon icon={faFacebook} className='text-gray-600 m-2' />
      <FontAwesomeIcon icon={faInstagram}  className='text-gray-600 m-2'/>
       <FontAwesomeIcon icon={faTwitter}  className='text-gray-600 m-2'/>
       <FontAwesomeIcon icon={faPinterest}  className='text-gray-600 m-2'/>
       </div>
      </div>

      <div className="text-center ">
      <span className="text-gray-600">Refer a friend and get  reward! </span>
      <Link to="" className="text-gray-500">Click for details</Link>
    </div>
    <div className="text-center">
      <h1 className="text-4xl font-bold">BELLA bloom</h1>
    </div>
    <div className="text-center">
      <span className="text-gray-600">Free monthly printable! </span>
      <Link to="" className="text-gray-500 ">Click to download</Link>
    </div>
    <div className="flex items-center">
      
      <FontAwesomeIcon icon={faUser} />
      <Link to="" > Log In</Link>
    </div>
  </div>
      
        <div className="bg-white py-2">
        <div className='container mx-auto flex justify-center space-x-8'>
        <Link to="/webdesign" className="text-gray-600 hover:text-gray-800">WEB DESIGN</Link>
        <Link to="/about" className="text-gray-600 hover:text-gray-800">ABOUT</Link>
        <Link to="/" className="text-gray-600 hover:text-gray-800">HOME</Link>
        <Link to="/help" className="text-gray-600 hover:text-gray-800">HELP</Link>
        <Link to="/resources" className="text-gray-600 hover:text-gray-800">RESOURCES</Link>
        <Link to="/blog" className="text-gray-600 hover:text-gray-800">BLOG</Link>
        <Link to="/contact" className="text-gray-600 hover:text-gray-800">CONTACT</Link>
        </div>
        </div>
  </header>  
        
    
  )
}

export default Header;




