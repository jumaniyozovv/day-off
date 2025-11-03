import React, { useContext, useState } from "react";
import { LeaveContext } from "../context/LeaveContext";

const LeaveList = () => {
  const { leaves } = useContext(LeaveContext);

  // filter holatlari
  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  // filtering logic
  const filteredLeaves = leaves.filter((leave) => {
    const typeMatch = filterType === "All" || leave.type === filterType;
    const statusMatch = filterStatus === "All" || leave.status === filterStatus;
    return typeMatch && statusMatch;
  });

  return (
    <div className="p-6 bg-gray-50 h-[90vh]">
      <div className=" shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          🗂 Leave Requests
        </h2>

        {/* 🔹 Filter controls */}
        <div className="flex flex-wrap gap-4   justify-center mb-6">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border outline-none border-gray-300 rounded-lg p-2 text-gray-700"
          >
            <option value="All">All Types</option>
            <option value="Vacation">Vacation</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Paid Leave">Paid Leave</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border outline-none border-gray-300 rounded-lg p-2 text-gray-700"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        {/* 🔹 Leave cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLeaves.length > 0 ? (
            filteredLeaves.map((leave, index) => {
              // Type badge uchun rang
              const typeColor =
                leave.type === "Vacation"
                  ? "bg-green-500"
                  : leave.type === "Sick Leave"
                  ? "bg-yellow-400"
                  : leave.type === "Paid Leave"
                  ? "bg-blue-500"
                  : "bg-gray-400";

              // Status badge uchun rang
              const statusColor =
                leave.status === "Approved"
                  ? "bg-green-500"
                  : leave.status === "Rejected"
                  ? "bg-red-500"
                  : "bg-yellow-500";

              return (
                <div
                  key={index}
                  className="p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
                >
                  {/* Leave type badge */}
                  <div
                    className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full mb-2 ${typeColor}`}
                  >
                    {leave.type}
                  </div>

                  <p className="text-gray-600 text-sm mb-1">
                    <strong>Start:</strong> {leave.startDate}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    <strong>End:</strong> {leave.endDate}
                  </p>

                  {/* Status badge */}

                  <span
                    className={`px-2 py-1 text-sm rounded-2xl text-white ${statusColor}`}
                  >
                    {leave.status}
                  </span>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No leaves found for selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaveList;
