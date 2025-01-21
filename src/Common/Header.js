import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/devforge_logo.png";
import searchLogo from "../Assets/magnifying-glass-solid.svg";

const Header = () => {
  return (
    <div>
      <nav class="flex bg-white justify-between items-center px-6 py-4">
        <img src={logo} alt="Logo" class="h-8" />

        <div class="flex space-x-4 ">
          <ul class="flex space-x-8 items-center">
          <li className="px-4 py-2 text-black border-2 border-transparent rounded-lg hover:border-blue-700">
          <img src={searchLogo} alt="Search Logo" class="h-6 w-6"/>
          </li>


            <li class="px-4 py-2 text-black  border-2 border-transparent rounded-lg   hover:border-blue-700  ">
              Contact
            </li>
            <li className=" border-emerald-500">
              <button class="px-4 py-2 text-black  border-2 border-transparent rounded-lg   hover:border-blue-700 ">
                <Link to="/login">Login</Link>
              </button>
            </li>
            <li>
              <button class="mx-px px-4 py-2 text-white bg-[#8294E5] rounded-xl border-1 border hover:shadow-2xl transition-all duration-200">
                <Link to="/signup">SignUp</Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
