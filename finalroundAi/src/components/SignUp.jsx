import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedin, FaMicrosoft } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleClose = () => {
    navigate("/"); // Redirect to Home Page
  };

  return (
    <div className=" flex items-center justify-center  backdrop-blur-md m-4">
      {/* Modal Box */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        {/* Close Button */}
        <button 
          onClick={handleClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center">Sign up for Final Round AI</h2>
        <p className="text-gray-500 text-center mt-1">Create an account to get started</p>

        {/* Social Signup Buttons */}
        <div className="flex justify-center space-x-3 mt-4">
          <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"><FaFacebook className="text-blue-600 text-lg" /></button>
          <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"><FaGoogle className="text-red-500 text-lg" /></button>
          <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"><FaLinkedin className="text-blue-500 text-lg" /></button>
          <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"><FaMicrosoft className="text-green-500 text-lg" /></button>
        </div>

        {/* Separator */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Name Input */}
        <div>
          <label className="block text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-md p-2 focus:ring focus:ring-orange-300 outline-none"
          />
        </div>

        {/* Email Input */}
        <div className="mt-3">
          <label className="block text-gray-700 mb-1">Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-md p-2 focus:ring focus:ring-orange-300 outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="mt-3">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border rounded-md p-2 focus:ring focus:ring-orange-300 outline-none"
          />
        </div>

        {/* Signup Button */}
        <button className="w-full bg-orange-500 text-white p-2 rounded-md mt-4 hover:bg-orange-600 transition">
          Sign Up →
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-500 mt-3">
          Already have an account? <a href="#" className="text-orange-500 font-semibold">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
