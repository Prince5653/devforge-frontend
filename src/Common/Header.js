import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="flex bg-white justify-between items-center px-6 py-4">
        <img src="" alt="Logo" class="h-8" />

        <div class="flex space-x-4 ">
          <ul class="flex space-x-8 items-center">
            <li class="relative cursor-pointer transition-all duration-200 group rounded-xl shadow-md py-1 px-4 border-black border hover:shadow-2xl">
              <search>Search</search>
            </li>
            <li class="cursor-pointer py-1 px-5 rounded-xl shadow-md border hover:shadow-2xl transition-all duration-200 ">
              Contact
            </li>
            <li>
              <button class="px-5 py-1 bg-white text-black  rounded-xl  hover:shadow-2xl transition-all duration-200 hover:border-1 hover:border-[#8294E5]">
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
