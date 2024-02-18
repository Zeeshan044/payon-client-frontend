import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";
import Button from "@/components/ui/button";

interface Props {
  table: any;
}

const TableCard: React.FC<Props> = ({ table }) => {
  const dispatch = useDispatch();

  const handleViewMoreClick = () => {
    dispatch(
      openModal({
        view: "VIEW_TABLE",
        data: { ...table, title: table.name },
      })
    );
  };
  return (
    <div className="relative  h-screen flex justify-center items-start mt-5">
      <div className="absolute top-[30px]  left-0 w-full h-full flex justify-between items-start p-5">
        {/* Yellow balls */}
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg z-10 border-l-4 border-yellow-500 ">
        <div className="flex items-center">
          <div className="text-lg font-semibold">{table.name}</div>
          <div className="text-sm text-gray-500 ml-2">Reserved</div>
        </div>
        <div className="text-xl font-bold">19:30</div>
        <button
          onClick={handleViewMoreClick}
          className={`px-4 py-2 mt-5 text-sm font-semibold rounded-md border border-gray-500`}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default TableCard;
