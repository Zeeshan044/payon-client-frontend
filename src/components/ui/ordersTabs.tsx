import { useState } from "react";
interface Props {
  tab: string;
  onTabChange: (tab: string) => void;
}
const Tabs: React.FC<Props> = ({ tab, onTabChange }) => {
  return (
    <div className="flex p-5  rounded-lg">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 text-sm font-semibold rounded-md ${
            tab === "all"
              ? "bg-primary text-white "
              : "text-gray-500 bg-white shadow-md"
          }`}
          onClick={() => onTabChange("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 text-sm font-semibold rounded-md ${
            tab === "pending"
              ? "bg-primary text-white"
              : "text-gray-500 bg-white shadow-md"
          }`}
          onClick={() => onTabChange("pending")}
        >
          Pending
        </button>
        <button
          className={`px-4 py-2 text-sm font-semibold rounded-md ${
            tab === "confirmed"
              ? "bg-primary text-white"
              : "text-gray-500 bg-white shadow-md"
          }`}
          onClick={() => onTabChange("confirmed")}
        >
          Confirmed
        </button>
      </div>
    </div>
  );
};

export default Tabs;
