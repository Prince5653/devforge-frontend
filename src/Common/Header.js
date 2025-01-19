import React from 'react'
import largeImage from '../Assets/devforge_logo.png'
import searchlogo from '../Assets/search_image.jpg'


const Header = () => {
  return (
    <div>
        <nav class="flex bg-white justify-between items-center px-6 py-4">
           <img src={largeImage} alt="Logo" class="h-10 py-1 px-2"/>

    
            <div class="flex space-x-4 ">
                <ul class="flex space-x-8 items-center">
                <li class="relative cursor-pointer transition-all duration-200 group py-1 px-2  hover:border hover:border-[#8294E5] hover:border-1"><search class="flex h-7 py-1 px-1"><img src={searchlogo} alt=""/></search></li>
                <li class="cursor-pointer py-1 px-5 rounded-xl shadow-md border hover:shadow-2xl transition-all duration-200 hover:border-[#8294E5]">Contact</li>
                    <li>
                    <button class="px-5 py-1 bg-white text-black  rounded-xl  hover:shadow-2xl transition-all duration-200 hover:border-1 hover:border hover:border-[#8294E5]"><a href="#">Login</a></button>
                    </li>
                    <li>
                    <button class="mx-px px-4 py-2 text-white bg-[#8294E5] rounded-xl border-1 border hover:shadow-2xl transition-all duration-200"><a href="#">SignUp</a></button>
                    </li>
                </ul>
            </div>
        </nav>
      
    </div>
  )
}

export default Header
