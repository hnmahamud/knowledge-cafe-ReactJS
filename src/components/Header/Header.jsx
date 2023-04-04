import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-base-100 border-b-2">
      <div className="flex-1 mr-4">
        <h3 className="font-bold text-xl">Weblog</h3>
      </div>
      <div className="flex-none gap-2">
        <div className="flex gap-4 md:gap-12 font-bold text-gray-500">
          <button className="hover:text-gray-800" type="button">Home</button>
          <button className="hover:text-gray-800" type="button">About</button>
          <button className="hover:text-gray-800" type="button">Media</button>
        </div>
        <div className="ml-8">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
