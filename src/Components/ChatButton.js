// ChatButton.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const ChatButton = () => {
  const [messages, setMessages] = useState([]);

  const handleChat = () => {
    // Delay before adding "I'm here" message
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, "Hey !"]);
    }, 1000); // 1-second delay

    // Further delay before adding "How can I help you?" message
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, "How can I help you?"]);
    }, 2000); // 2-second delay
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center">
      <div className="mb-2">
        {messages.map((message, index) => (
          <div key={index} className="message text-white bg-blue-600 p-2 rounded mb-1">
            {message}
          </div>
        ))}
      </div>
      <div className="bg-blue-600 text-white p-4 rounded-full shadow-lg cursor-pointer style" onClick={handleChat}>
        <FontAwesomeIcon icon={faComments} size="2x" />
      </div>
    </div>
  );
};

export default ChatButton;
