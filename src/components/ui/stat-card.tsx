import React from "react";

interface Props {
  title: string;
  value: string;
}

const StatCard: React.FC<Props> = ({ title, value }) => {
  return (
    <div className="bg-blue-500 text-white shadow rounded-xl px-6 py-8 max-w-sm w-full mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-base font-medium">{title}</h4>
          <div className="lg:text-4xl text-2xl lg:font-bold font-medium mb-3">{value}</div>
          <div className="text-sm font-medium text-white flex items-center">
            <svg
              className="w-4 h-2 text-white fill-current "
              viewBox="0 0 20 20"
            >
              <path d="M5 14l5 5 5-5H5z"></path>
            </svg>
            14% Inc
          </div>
        </div>
        <div>
          <div className="relative -mt-5">
            <div className="w-16 h-32 flex items-center justify-center">
              <span className="text-3xl mb-2 font-semibold ">$</span>
            </div>
            <div className="absolute top-[30px] left-0 ">
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
                  className="text-white"
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
          <div className=" flex items-center justify-center -mt-8">
            <span className="text-xl font-semibold ">+74%</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatCard;
