import React from "react";

const StaffMemberCard = () => {
  return (
    <div className="bg-white p-6 w-full mx-auto rounded-lg shadow-2xl ">
      <div className="text-black text-2xl mb-4">Kitchen Shift</div>

      <div
        className="bg-[#5271FF] p-4 rounded-lg mb-4"
        style={{ borderRight: "6px solid purple" }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="text-white font-bold">Kyle Delmarque</div>
          <div className="text-purple-300">Checker</div>
        </div>
        <div className="text-purple-200">Start Shift: 01:21 PM</div>
      </div>

      <div
        className="bg-[#5271FF] p-4 rounded-lg mb-4"
        style={{ borderRight: "6px solid purple" }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="text-white font-bold">Herdine Mclaren</div>
          <div className="text-purple-300">Sauce</div>
        </div>
        <div className="text-purple-200">Start Shift: 01:45 PM</div>
      </div>

      <div
        className="bg-[#5271FF] p-4 rounded-lg"
        style={{ borderRight: "6px solid purple" }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="text-white font-bold">Elisa Van Hudgens</div>
          <div className="text-purple-300">Grill</div>
        </div>
        <div className="text-purple-200">Start Shift: 02:13 PM</div>
      </div>
    </div>
  );
};

export default StaffMemberCard;
