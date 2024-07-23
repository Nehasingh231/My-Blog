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
import useOnlineStatus from "../utils/useOnlineStatus";
import ChatButton from "./ChatButton";
import LoginButton from "./LoginButton";
import AuthContextProvider from "../utils/authcontext";


const TopHeader = () => {
   
  return (
    <div className="bg-gray-100 text-black py-2 border-b  border-gray-300 flex justify-between items-center">
      <div className="flex space-x-4">
      <Link to=""> <FontAwesomeIcon icon={faFacebook} className="icon text-gray-600 m-2" /> </Link>
      <Link to=""> <FontAwesomeIcon icon={faInstagram} className="icon text-gray-600 m-2" />  </Link>
      <Link to=""> <FontAwesomeIcon icon={faTwitter} className="icon text-gray-600 m-2" />  </Link>
      <Link to=""> <FontAwesomeIcon icon={faPinterest} className="icon text-gray-600 m-2" />  </Link>
      </div>
      <span className="flex-grow text-center">
        WELCOME TO BLOOM AND GLOW WORLD, SHINE LIKE THE WHOLE UNIVERSE IS YOURS✨!
      </span>
      <AuthContextProvider>
        <LoginButton />
      </AuthContextProvider>
    </div>
  );
};

const SubHeader = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="bg-gray-100 py-2 border-b border-gray-300">
      <div className="container mx-auto flex justify-center space-x-8">
        <Link to="/" className="link text-gray-600 hover:text-gray-800">
          online status: {onlineStatus ? "✅" : "🔴"}
        </Link>
        <Link to="/webdesign" className="link text-gray-600 hover:text-gray-800">
          WEB DESIGN
        </Link>
        <Link to="/about" className="link text-gray-600 hover:text-gray-800">
          ABOUT
        </Link>
        <Link to="/portfolio" className="link text-gray-600 hover:text-gray-800">
          PORTFOLIO
        </Link>
        <Link to="/resources" className="link text-gray-600 hover:text-gray-800">
          RESOURCES
        </Link>
        <Link to="/blog" className="link text-gray-600 hover:text-gray-800">
          BLOG
        </Link>
        <Link to="/contact" className="link text-gray-600 hover:text-gray-800">
          CONTACT
        </Link>
        <Link to="/shopmart" className="link text-gray-600 hover:text-gray-800">
          SHOPMART
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
            <Link to="/" className="link text-gray-500">
              Click for details
            </Link>
          </div>
          <div className="flex-1 text-center p-2 border-r border-gray-300">
            <h1 className="text-5xl font-bold style_text" >Bloom And Glow</h1>
          </div>
          <div className="flex-1 text-center p-2">
            <span className="text-gray-600">Free monthly printable!</span>
            <br />
            <Link to="/" className="link text-gray-500">
              Click to download
            </Link>
          </div>
        </div>
    </header>
      <SubHeader />
      <ChatButton />
    
    </div>
  );
};

export default Header;