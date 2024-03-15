import { useState } from "react";
interface Props {
  tab: string;
  onTabChange: (tab: string) => void;
}
const Tabs: React.FC<Props> = ({ tab, onTabChange }) => {
  return (
    <div className="flex rounded-lg mt-[3%]">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 text-sm font-normal rounded-md ${
            tab === "all"
              ? "bg-primary text-white "
              : "text-blue-400 bg-white shadow-md"
          }`}
          onClick={() => onTabChange("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 text-sm font-normal rounded-md ${
            tab === "pending"
              ? "bg-primary text-white"
              : "text-blue-400 bg-white shadow-md"
          }`}
          onClick={() => onTabChange("pending")}
        >
          On Process
        </button>
        <button
          className={`px-4 py-2 text-sm font-normal rounded-md ${
            tab === "confirmed"
              ? "bg-primary text-white"
              : "text-blue-400 bg-white shadow-md"
          }`}
          onClick={() => onTabChange("confirmed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Tabs;
