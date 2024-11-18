import React from "react";

const VerticalNavbar = () => {
  return (
    <div className="flex h-screen">
      {/* Taskbar */}
      <div className="w-[5%] bg-gray-800 h-full flex flex-col justify-between items-center text-white fixed">
        {/* Top Section */}
        <div className="mt-4">
          {/* Logo */}
          <div className="flex justify-center items-center mb-6">
            <div className="bg-red-700 w-10 h-10 flex items-center justify-center ">
              <span className="text-lg font-bold">X</span>
            </div>
          </div>
          {/* Icons */}
          <div className="space-y-8">
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 bg-gray-800  flex items-center justify-center hover:bg-gray-500 cursor-pointer">
                🏠 
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 bg-gray-800  flex items-center justify-center hover:bg-gray-00 cursor-pointer">
                📂
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 bg-gray-800  flex items-center justify-center hover:bg-gray-500 cursor-pointer">
                🔔
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 bg-gray-800  flex items-center justify-center hover:bg-gray-500 cursor-pointer">
                ⚙️
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 bg-gray-800  flex items-center justify-center hover:bg-gray-500 cursor-pointer">
                👁️
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mb-4">
          {/* Profile */}
          <div className="flex justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-500 cursor-pointer">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
          {/* Logout */}
          <div className="flex justify-center items-center mt-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 cursor-pointer">
              ⏩
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalNavbar;
