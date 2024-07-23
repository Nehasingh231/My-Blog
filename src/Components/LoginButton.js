import React, { useState } from 'react';
import { faUser, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/authcontext";

export default function LoginButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, isLoading, error, handleSignIn, handleSignOut } = useAuth();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative flex items-center space-x-2 link mr-10">
      {user ? (
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <img className="object-cover h-12 w-12 rounded-full" src={user?.photoURL} alt="user-image" />
          </button>
          {isDropdownOpen && (
            <div className="absolute left-[-50px] mt-2 w-48 bg-white shadow-lg rounded-md">
              <div className="flex flex-col p-2">
                <Link to="/settings" className="flex items-center py-2 px-4 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faCog} className="mr-2" />
                  Settings
                </Link>
                <button onClick={handleSignOut} className="flex items-center py-2 px-4 text-left hover:bg-gray-100">
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <FontAwesomeIcon icon={faUser} />
          <button onClick={handleSignIn} className="link text-gray-600">
            Log In
          </button>
        </>
      )}
    </div>
  );
}
