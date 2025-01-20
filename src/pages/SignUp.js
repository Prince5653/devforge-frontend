import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form className="space-y-4">
          <div className="relative flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Avatar</span>
            </div>
            <label
              htmlFor="avatar"
              className="absolute bottom-0 right-10 bg-black p-2 text-white rounded-full cursor-pointer"
            >
              📷
              <input id="avatar" type="file" className="hidden" />
            </label>
          </div>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
          <input
            type="text"
            placeholder="Bio"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center my-4 text-gray-500">OR</p>
        <Link
          to="/login"
          className="w-full py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
        >
          Login Instead
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
