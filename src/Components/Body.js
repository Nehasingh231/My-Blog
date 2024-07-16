import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const onlineStatus = useOnlineStatus();
   if(onlineStatus === false){          
     return <h1>offline</h1>
   }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="card bg-white p-4 shadow-md rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Work-Life Balance"
          className="w-96 h-96 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-bold mb-2 heading_style">
          When was the last time you visited a village ?
        </h3>
        <p className="text-gray-700 mb-4">
          Villages typically have a small population.Villages are basically rely on agriculture,fishing, or crafts.
          Folk music, dance, and art forms are an integral part of village culture.
        </p>
        <span className="text-sm text-gray-500">55 views</span>
      </div>
      <div className="card bg-white p-4 shadow-md rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1683832819721-5305f67cc711?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shades of Grey"
          className="w-96 h-96 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-bold  mb-2 heading_style">Let's Talk about Nature. </h3>
        <p className="text-gray-700 mb-4">
          Nature has power to shape our environment and climate,offer beauty, support life and growth and many more.
          it gives us fresh air and clean water, It has ability to heal you.
          To save our Nature we should plant more trees to make our life beautiful and stress free.
        </p>
        <span className="text-sm text-gray-500">100views</span>
      </div>
      <div className="card bg-white p-4 shadow-md rounded-lg">
        <img
          src="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cookies"
          className="w-96 h-96 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-bold mb-2 heading_style">
           Let's Discuss about this delicious Food!
        </h3>
        <p className="text-gray-700 mb-4">
        Food, The universal language that brings us all together!
        Food is Nourishment for our bodies, - A symbol of love, care, and hospitality, A means of expression and creativity.
        </p>
        <span className="text-sm text-gray-500">65 views</span>
      </div>
    </div>
  );
};

export default Body;
