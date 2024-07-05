import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const TopHeader = () => {
  return (
    <div className="bg-gray-100 text-black py-2 border-b  border-gray-300 flex justify-between items-center">
      <div className="flex space-x-4">
        <FontAwesomeIcon icon={faFacebook} className="text-gray-600 m-2" />
        <FontAwesomeIcon icon={faInstagram} className="text-gray-600 m-2" />
        <FontAwesomeIcon icon={faTwitter} className="text-gray-600 m-2" />
        <FontAwesomeIcon icon={faPinterest} className="text-gray-600 m-2" />
      </div>
      <span className="flex-grow text-center">
        CALLING ALL MOTHER-HUSTLERS, BOSS BABES, AND FEMALE ENTREPRENEURS!
      </span>
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faUser} />
        <Link to="" className="text-gray-600">
          Log In
        </Link>
      </div>
    </div>
  );
};

const SubHeader = () => {
  return (
    <div className="bg-gray-100 py-2 border-b border-gray-300">
      <div className="container mx-auto flex justify-center space-x-8">
        <Link to="/webdesign" className="text-gray-600 hover:text-gray-800">
          WEB DESIGN
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-gray-800">
          ABOUT
        </Link>
        <Link to="/portfolio" className="text-gray-600 hover:text-gray-800">
          PORTFOLIO
        </Link>
        <Link to="/resources" className="text-gray-600 hover:text-gray-800">
          RESOURCES
        </Link>
        <Link to="/blog" className="text-gray-600 hover:text-gray-800">
          BLOG
        </Link>
        <Link to="/contact" className="text-gray-600 hover:text-gray-800">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="bg-gray-100 ">
      <TopHeader />
      <header className="container mx-auto py-1 flex justify-between items-center border-b border-gray-300">
        <div className="flex flex-1 items-stretch">
          <div className="flex-1 text-center p-2 border-r border-gray-300">
            <span className="text-gray-600">Refer a friend and get a reward!</span>
            <br />
            <Link to="" className="text-gray-500">
              Click for details
            </Link>
          </div>
          <div className="flex-1 text-center p-2 border-r border-gray-300">
            <h1 className="text-4xl font-bold style_text" >Bloom And Glow</h1>
          </div>
          <div className="flex-1 text-center p-2">
            <span className="text-gray-600">Free monthly printable!</span>
            <br />
            <Link to="" className="text-gray-500">
              Click to download
            </Link>
          </div>
        </div>
      </header>
      <SubHeader />
    </div>
  );
};

export default Header;
