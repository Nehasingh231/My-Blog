import React from 'react';


const Body = () => {
 

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="card bg-white p-4 shadow-md rounded-lg">
        <img src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work-Life Balance" className="w-96 h-96 object-cover rounded-md mb-4"/>
        <h3 className="text-lg font-bold mb-2">When was the last time you legit CLOSED your computer?</h3>
        <p className="text-gray-700 mb-4">Studies show that our sleep, focus and even relationships suffer when we don't have clear lines drawn between work and home life.</p>
        <span className="text-sm text-gray-500">5 views</span>
      </div>
      <div className="card bg-white p-4 shadow-md rounded-lg">
        <img src="https://images.unsplash.com/photo-1683832819721-5305f67cc711?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shades of Grey" className="w-96 h-96 object-cover rounded-md mb-4"/>
        <h3 className="text-lg font-bold mb-2">Let's Talk 50 Shades of Grey</h3>
        <p className="text-gray-700 mb-4">Committing to a color scheme for your biz can be a bit intimidating but is SO important in building brand identity.</p>
        <span className="text-sm text-gray-500">10 views</span>
      </div>
      <div className="card bg-white p-4 shadow-md rounded-lg">
        <img src="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cookies" className="w-96 h-96 object-cover rounded-md mb-4"/>
        <h3 className="text-lg font-bold mb-2">The Secret Ingredient to the Best Half-Baked, Gooey-Centered, Chocolate-Lover-Cookies Ever!!</h3>
        <p className="text-gray-700 mb-4">Is it really even summer if you haven't baked chocolate chip cookies?</p>
        <span className="text-sm text-gray-500">10 views</span>
      </div>
    </div>
  );
};

export default Body;
