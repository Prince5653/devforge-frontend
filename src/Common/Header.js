import React from "react";
import { Link } from "react-router-dom";
import searchlogo from "../Assets/search_image.jpg";
import logo from "../Assets/devforge_logo.png";

const Header = () => {
  return (
    <div>
        <nav class="flex  fixed w-full bg-white justify-between items-center px-6 bg-transparent bg-opacity-90 py-4">
           <img src={logo} alt="Logo" class="h-10 py-1 px-2"/>

    
            <div class="flex space-x-4 ">
                <ul class="flex space-x-8 items-center">
                <li class="relative cursor-pointer transition-all duration-200 group py-1 px-2  hover:border hover:border-[#8294E5] hover:border-1"><search class="flex h-7 py-1 px-1"><img src={searchlogo} alt=""/></search></li>
                <li class="cursor-pointer py-1 px-5 rounded-xl shadow-md border hover:shadow-2xl transition-all duration-200 hover:border-[#8294E5]">Contact</li>
                    <li>
                    <button class="cursor-pointer py-1 px-5 rounded-xl shadow-md border hover:shadow-2xl transition-all duration-200 hover:border-[#8294E5]"><Link to="/login">Login</Link></button>
                    </li>
                    <li>
                    <button class="mx-px px-4 py-2 text-white bg-[#8294E5] rounded-xl border-1 border hover:shadow-2xl transition-all duration-200"><Link to="/signup">SignUp</Link></button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
};

export default Header;
