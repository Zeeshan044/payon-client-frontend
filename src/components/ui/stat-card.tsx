import React from "react";

interface Props {
  title: string;
  value: string;
}

const StatCard: React.FC<Props> = ({ title, value }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 max-w-sm w-full mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-medium text-gray-500">{title}</h4>
          <div className="text-3xl font-semibold text-gray-900">{value}</div>
          <div className="text-sm font-medium text-blue-600 flex items-center">
            <svg
              className="w-4 h-2 text-blue-400 fill-current "
              viewBox="0 0 20 20"
            >
              <path d="M5 14l5 5 5-5H5z"></path>
            </svg>
            14% Inc
          </div>
        </div>
        <div className="relative">
          <div className="w-16 h-32 flex items-center justify-center">
            <span className="text-lg font-semibold text-blue-600">+74%</span>
          </div>
          <div className="absolute top-[30px] left-0 w-18 h-16">
            <svg
              className="transform -rotate-90 w-full h-full"
              viewBox="0 0 32 32"
            >
              <circle
                className="text-gray-300"
                stroke-width="4"
                stroke="currentColor"
                fill="none"
                cx="16"
                cy="16"
                r="14"
              ></circle>
              <circle
                className="text-blue-600"
                stroke-width="4"
                stroke-dasharray="87.9646"
                stroke-dashoffset="21.99115"
                stroke-linecap="round"
                stroke="currentColor"
                fill="none"
                cx="16"
                cy="16"
                r="14"
              ></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
