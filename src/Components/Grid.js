import React from "react";

function Grid() {
  return (
    <div>
      <div class="flex flex-wrap gap-4 justify-center ">
        <div class="w-80 h-100 border shadow-lg grid-rows-1 py-2 px-2 mx-5  rounded outline-offset-1">
          <div class="py-4">
            <h2>
              <span class="flex mx-2">
                <p class="py-1 px-2 rounded-xl bg-[#DEFFFE] text-[#014847]">
                  Fronted cloud
                </p>
              </span>
              <span class=" flex text-3xl mx-0.5">
                <h1 class="py-1 px-2">Deploy Faster</h1>
              </span>
            </h2>
          </div>
          <div class="py-4">
            <p class="py-1 px-2 font-mulish">
              DevForge Core is a frontend cloud solution for developers to build
              and deploy future-proof digital solutions with modern, composable
              tooling that works with all modern frameworks.
            </p>
          </div>
          <div>
            <a href="/" class="underline font-mulish font-bold py-2 px-2">
              Learn More About Core
            </a>
          </div>
        </div>

        {/* <!-- second --> */}
        <div class="w-80 h-100 border shadow-lg grid-rows-1 py-2 px-2 mx-5  rounded outline-offset-1">
          <div class="py-4">
            <h2>
              <span class="flex mx-2">
                <p class="py-1 px-2 rounded-xl bg-[#EDF4FF] text-[#2036A1]">
                  Data Layer
                </p>
              </span>
              <span class=" flex text-3xl mx-0.5">
                <h1 class="py-1 px-2">Unify all content</h1>
              </span>
            </h2>
          </div>
          <div class="py-4">
            <p class="py-1 px-2 font-mulish">
              DevForge Core is a frontend cloud solution for developers to build
              and deploy future-proof digital solutions with modern, composable
              tooling that works with all modern frameworks.
            </p>
          </div>
          <div>
            <a href="/" class="underline font-mulish font-bold py-2 px-2">
              Learn More About Core
            </a>
          </div>
        </div>

        {/* <!-- third --> */}
        <div class="w-80 h-100 border shadow-lg grid-rows-1 py-2 px-2 mx-5  rounded outline-offset-1">
          <div class="py-4">
            <h2>
              <span class="flex mx-2">
                <p class="py-1 px-2 rounded-xl bg-[#FDF5D8] text-[#603408]">
                  Data Layer
                </p>
              </span>
              <span class=" flex text-3xl mx-0.5">
                <h1 class="py-1 px-2">Visual Editor</h1>
              </span>
            </h2>
          </div>
          <div class="py-4">
            <p class="py-1 px-2 font-mulish">
              DevForge Core is a frontend cloud solution for developers to build
              and deploy future-proof digital solutions with modern, composable
              tooling that works with all modern frameworks.
            </p>
          </div>
          <div>
            <a href="/" class="underline font-mulish font-bold py-2 px-2">
              Learn More About Core
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
