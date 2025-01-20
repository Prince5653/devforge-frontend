import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  
  // const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form className="space-y-4">
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
            Login
          </button>
        </form>
        <p className="text-center my-4 text-gray-500">OR</p>
        <Link
          to="/signup"
          className="w-full py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
          // onClick={() => navigate("/signup")}
        >
          Sign Up Instead
        </Link>
      </div>
    </div>
  );
};

export default Login;
