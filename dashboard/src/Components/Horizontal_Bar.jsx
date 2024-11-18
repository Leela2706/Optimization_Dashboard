import React from "react";

const HorizontalBar = () => {
  return (
    <div className="bg-gray-900 text-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Optimization Dashboard</h1>
        <div className="text-sm">
          <span className="mr-2">Last updated on October 25, 2023 at 2:31 PM</span>
          <button className="bg-gray-900 p-2 rounded hover:bg-gray-600">
            🔄
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mt-4 flex items-center space-x-4 overflow-x-auto">
        {/* Dropdown Filters */}
        {[
          "Business unit",
          "Area",
          "Field",
          "Manufacturer",
          "Method of production",
          "Well",
          "Well group",
        ].map((filter, index) => (
          <div key={index} className="relative">
            <div className="text-xs font-semibold mb-1 text-left">{filter}</div>
            <select
              className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
              style={{ height: '42px' }}
            >
              {filter === "Method of production" ? (
                <option>ESP</option>
              ) : (
                <option>{`All ${filter.toLowerCase()}s`}</option>
              )}
            </select>
          </div>
        ))}

        {/* Additional Filters */}
        <div className="flex items-center space-x-4">
          {/* Clear Filters */}
          <button className="text-blue-400 hover:underline">Clear filters</button>

          {/* My Wells and All Wells */}
          <div className="flex justify-end space-x-2">
            <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 ">
              My wells
            </button>
            <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">
              All wells
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalBar;



// import React from "react";

// const HorizontalBar = () => {
//   return (
//     <div className="bg-gray-900 text-white p-4">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-xl font-semibold">Optimization Dashboard</h1>
//         <div className="text-sm">
//           <span className="mr-2">Last updated on October 25, 2023 at 2:31 PM</span>
//           <button className="bg-gray-900 p-2 rounded hover:bg-gray-600">
//             🔄
//           </button>
//         </div>
//       </div>

//       {/* Filter Bar */}
//       <div className="mt-4 flex items-center space-x-4 overflow-x-auto">
//         {/* Dropdown Filters */}
//         {[
//           "Business unit",
//           "Area",
//           "Field",
//           "Manufacturer",
//           "Method of production",
//           "Well",
//           "Well group",
//         ].map((filter, index) => (
//           <div key={index} className="relative">
//             <div className="text-xs font-semibold mb-1 text-left">{filter}</div>
//             <select
//               className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-32"
//               style={{ height: '32px' }}
//             >
//               {filter === "Method of production" ? (
//                 <option>ESP</option>
//               ) : (
//                 <option>{`All ${filter.toLowerCase()}s`}</option>
//               )}
//             </select>
//           </div>
//         ))}

//         {/* Additional Filters */}
//         <div className="flex items-center space-x-4">
//           {/* Clear Filters */}
//           <button className="text-blue-400 hover:underline">Clear filters</button>

//           {/* My Wells and All Wells */}
//           <div className="flex justify-end space-x-2"> {/* Align to right */}
//             <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 ">
//               My wells
//             </button>
//             <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">
//               All wells
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HorizontalBar;