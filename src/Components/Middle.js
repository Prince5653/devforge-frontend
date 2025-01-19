import React from 'react'

function Middle() {
  return (
    <div>

        <div class="w-full h-[35vh] bg-[#8294E5] flex flex-col items-center justify-center" >
            <p class="text-5xl text-white py-2 font-serif text-border ">
                Connect Everything
            </p>
            <p class="text-5xl text-white py-2 font-serif text-border">
                Build Anything
            </p>
        </div>
        <div class="flex py-6 items-center justify-center">

            <button class="mx-7 px-4 py-2 text-white bg-[#8294E5] rounded-lg border-1 border hover:shadow-2xl transition-all duration-200">Deploy to DevForge</button>
            <button class="mx-7 px-4 py-2 text-white bg-[#8294E5] rounded-lg border-1 border hover:shadow-2xl transition-all duration-200">Request Demo</button>

        </div>
      
    </div>
  )
}

export default Middle
