import React from "react";

import "./skeleton-loader.styles.scss";

function SkeletonLoader(props) {
  return (
    <div className="bg-gray-800 h-60 md:h-64 flex w-auto rounded-md text-gray-300 overflow-hidden elementToFadeInAndOut">
      {/* Card Image */}
      <div className="relative w-64 aspect-w-16 aspect-h-1 animate-pulse">
        <div className="object-cover rounded-l-md bg-white"></div>

        {/*Card Studio & Title */}
        <div className="absolute inset-x-0 bottom-0 bg-gray-800 bg-opacity-90 w-full py-2 px-2 rounded-bl-md studio"></div>
      </div>
      {/* Card Desc */}
      <div className="w-full md:max-w-full flex flex-col justify-between">
        <div className="mx-3 mt-3 mb-2">
          <div class="flex-1 space-y-4 py-1 animate-pulse">
            <div class="space-y-2">
              <div class="h-4 bg-gray-700 rounded w-2/5"></div>
              <div class="h-4 bg-gray-700 rounded w-3/5"></div>
              <div class="h-4 bg-gray-700 rounded w-2/5"></div>
            </div>
            <div class="space-y-3 mt-4">
              <div class="h-4 bg-gray-700 rounded w-full"></div>
              <div class="h-4 bg-gray-700 rounded w-full"></div>
              <div class="h-4 bg-gray-700 rounded w-full"></div>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 h-9 text-black py-2 rounded-br-md"></div>
      </div>
    </div>
  );
}

export default SkeletonLoader;
