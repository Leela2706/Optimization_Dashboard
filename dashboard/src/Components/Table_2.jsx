import React, { useState } from 'react';

const data = [
  {
    status: "Actively tracked",
    wellName: "GLACIER ROCK 15",
    runLifeDays: 332,
    dates: "06-Aug-2024 to 13-Aug-2024",
    freq: "45.0 to 49 (Target 49)",
    oil: "45.0 to 49 (Target 49)",
    cumulative: 127.9,
    bFactor: 1.2,
    del: 0.79081,
    dNom: 0.79081,
    curveStatus: "Calculation completed",
  },
  {
    status: "Actively tracked",
    wellName: "TITAN RIDGE 4",
    runLifeDays: 447,
    dates: "06-Aug-2024 to 13-Aug-2024",
    freq: "45.0 to 49 (Target 49)",
    oil: "45.0 to 49 (Target 49)",
    cumulative: 3.2,
    bFactor: 0.8,
    del: 0.79081,
    dNom: 0.79081,
    curveStatus: "Calculation completed",
  },
  {
    status: "Actively tracked",
    wellName: "HORIZON ECHO 7",
    runLifeDays: 227,
    dates: "06-Aug-2024 to 13-Aug-2024",
    freq: "45.0 to 49 (Target 49)",
    oil: "45.0 to 49 (Target 49)",
    cumulative: 14.8,
    bFactor: 1.2936,
    del: 0.79081,
    dNom: 0.79081,
    curveStatus: "Calculation completed",
  },
  {
    status: "Actively tracked",
    wellName: "SUMMIT PEAK 11",
    runLifeDays: 334,
    dates: "06-Aug-2024 to 13-Aug-2024",
    freq: "45.0 to 49 (Target 49)",
    oil: "45.0 to 49 (Target 49)",
    cumulative: 0.0,
    bFactor: 1,
    del: 0.79081,
    dNom: 0.79081,
    curveStatus: "Curve was rising - set as straight line",
  },
  {
    status: "Actively tracked",
    wellName: "ATLAS VALLEY 6",
    runLifeDays: 327,
    dates: "06-Aug-2024 to 13-Aug-2024",
    freq: "45.0 to 49 (Target 49)",
    oil: "45.0 to 49 (Target 49)",
    cumulative: 1.7,
    bFactor: -129361,
    del: 0.79081,
    dNom: 0.79081,
    curveStatus: "Calculation completed",
  },
  {
    status: "Actively tracked",
    wellName: "ORION FIELD 9",
    runLifeDays: 278,
    dates: "06-Aug-2024 to 13-Aug-2024",
    freq: "45.0 to 49 (Target 49)",
    oil: "45.0 to 49 (Target 49)",
    cumulative: 0.0,
    bFactor: 0.8,
    del: 0.79081,
    dNom: 0.79081,
    curveStatus: "Calculation completed",
  },
  {
    status: "Actively tracked",
    wellName: "EAGLES NEST 2",
    runLifeDays: 323,
    dates: "06-Aug-2024 to 13-Aug-2024",
    freq: "45.0 to 49 (Target 49)",
    oil: "45.0 to 49 (Target 49)",
    cumulative: 5.9,
    bFactor: 1.2,
    del: 0.79081,
    dNom: 0.79081,
    curveStatus: "Calculation completed",
  },
  {
    status: "Actively tracked",
    wellName: "FRONTIER BASIN 5",
    runLifeDays: 312,
    dates: "06-Aug-2024 to 13-Aug-2024",
    freq: "45.0 to 49 (Target 49)",
    oil: "45.0 to 49 (Target 49)",
    cumulative: 35.0,
    bFactor: 3.4,
    del: 0.79081,
    dNom: 0.79081,
    curveStatus: "Calculation completed",
  },
  {
    status: "Actively tracked",
    wellName: "NOVA STREAM 12",
    runLifeDays: 225,
    dates: "06-Aug-2024 to 13-Aug-2024",
    freq: "45.0 to 49 (Target 49)",
    oil: "45.0 to 49 (Target 49)",
    cumulative: 45.0,
    bFactor: 45.0,
    del: 0.79081,
    dNom: 0.79081,
    curveStatus: "Calculation completed",
  },
  {
    status: "Actively tracked",
    wellName: "APEX DISCOVERY 1",
    runLifeDays: 343,
    dates: "06-Aug-2024 to 13-Aug-2024",
    freq: "45.0 to 49 (Target 49)",
    oil: "45.0 to 49 (Target 49)",
    cumulative: 45.0,
    bFactor: 45.0,
    del: 0.79081,
    dNom: 0.79081,
    curveStatus: "Calculation completed",
  },
  {
    status: "Actively tracked",
    wellName: "PHOENIX RISE 10",
    runLifeDays: 321,
    dates: "06-Aug-2024 to 13-Aug-2024",
    freq: "45.0 to 49 (Target 49)",
    oil: "45.0 to 49 (Target 49)",
    cumulative: 45.0,
    bFactor: 45.0,
    del: 0.79081,
    dNom: 0.79081,
    curveStatus: "Calculation completed",
  },
];

const Table_2 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Filter and paginate data
  const filteredData = data.filter(
    (item) =>
      item.wellName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.curveStatus.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-left">Tracked Frequency Changes</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 w-full rounded bg-gray-800 text-gray-300 placeholder-gray-500"
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-2 border border-gray-700">Status</th>
              <th className="p-2 border border-gray-700">Well Name</th>
              <th className="p-2 border border-gray-700">Run Life Days</th>
              <th className="p-2 border border-gray-700">Dates</th>
              <th className="p-2 border border-gray-700">Freq (Hz)</th>
              <th className="p-2 border border-gray-700">Oil (stb/d)</th>
              <th className="p-2 border border-gray-700">Cumulative (stb/d)</th>
              <th className="p-2 border border-gray-700">BFactor</th>
              <th className="p-2 border border-gray-700">Curve Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-700 ${
                  index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                }`}
              >
                <td className="p-2 border border-gray-700 text-green-500">
                  ● {row.status}
                </td>
                <td className="p-2 border border-gray-700">{row.wellName}</td>
                <td className="p-2 border border-gray-700">{row.runLifeDays}</td>
                <td className="p-2 border border-gray-700">{row.dates}</td>
                <td className="p-2 border border-gray-700">{row.freq}</td>
                <td className="p-2 border border-gray-700">{row.oil}</td>
                <td className="p-2 border border-gray-700">{row.cumulative}</td>
                <td className="p-2 border border-gray-700">{row.bFactor}</td>
                <td className="p-2 border border-gray-700">{row.curveStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="p-2 bg-gray-700 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="p-2 bg-gray-700 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table_2;
