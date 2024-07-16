// ChatButton.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ChatButton = () => {
   const [chat,setChat] = useState("Hi,")
   const handleChat = () => {
      setChat("i m here")
   }
  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg cursor-pointer">
    <div onClick={handleChat}>
    <FontAwesomeIcon icon={faComments} size="2x" />
  </div>
 
      <div>{chat}</div>
    </div>
  );

};

export default ChatButton;
