import React from "react";
import VerticalNavbar from "./Vertical_NavBar";
import HorizontalBar from "./Horizontal_Bar";



const App_1 = () => {
  return (
    <div className="flex h-screen">
      {/* Vertical Navbar */}
      <VerticalNavbar />

      {/* Main Content Area */}
      <div className="flex-grow">
        {/* Horizontal Navbar */}
        <HorizontalBar />

        {/* Your other content goes here */}
      </div>
    </div>
  );
};

export default App_1;