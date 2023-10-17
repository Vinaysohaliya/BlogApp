import React from 'react';
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 bg">
      <header className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">LOGO</div>
          <div className="flex space-x-4">
            <Link to="/signin" >
              <button className="text-white">Signin</button>
            </Link>
            <Link to="/signup" >
              <button className="text-white">Signup</button>
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto flex flex-col justify-center items-center h-full">
        <h1 className="text-8xl font-bold text-center">Stay curious.</h1>
        <p className="text-2xl font-bold text-center mt-4">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button className="bg-blue-500 text-white rounded-lg px-6 py-3 mt-6 hover:bg-blue-600">
          Start reading
        </button>
      </div>
    </div>
  );
};

export default HomePage;
