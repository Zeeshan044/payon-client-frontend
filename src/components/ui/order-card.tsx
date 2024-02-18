import React from "react";
import Button from "./button";
import { convertToUSD } from "@/utils";
import { FaCheckDouble } from "react-icons/fa6";
import { IoMdStopwatch } from "react-icons/io";

interface Props {
  tableName: string;
  orderCount: number;
  onClick: () => void;
  amount: number;
  state: string;
  createdAt: string;
}
const computeName = (value: string) => {
  switch (value) {
    case "pending":
      return "InProgress";
    case "confirmed":
      return "Completed";
    case "completed":
      return "Served";
    default:
      return "";
  }
};

const OrderCard: React.FC<Props> = ({
  tableName,
  orderCount,
  amount,
  createdAt,
  state,
  onClick,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <div className="text-sm mb-2 flex justify-between items-center">
        <div className="h-[70px] flex items-center justify-center  w-[70px]">
          <span className="text-black text-bold text-[20px]"> {tableName}</span>
        </div>
        <span className="text-sm font-semibold">Order #925</span>
      </div>
      <div className="flex justify-between items-center mb-4 mt-5">
        <span
          className={`${
            state === "pending" ? "bg-red-500" : "bg-green-500"
          } text-white text-xs font-bold rounded-md px-2 py-1 flex items-center justify-between gap-1`}
        >
          {state === "pending" ? <IoMdStopwatch /> : <FaCheckDouble />}{" "}
          {computeName(state)}
        </span>
      </div>
      <div className="text-sm flex justify-between mb-2">
        <div>{createdAt}</div>
        <div>06:12 PM</div>
      </div>
      <div className="border-t border-gray-200 py-4">
        <div className="flex justify-between mb-2">
          <span>Scrambled eggs with toast</span>
          <span>$16.99</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Smoked Salmon Bagel</span>
          <span>$18.49</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Belgian Waffles</span>
          <span>$38.98</span>
        </div>
        <div className="flex justify-between">
          <span>ClassNameic Lemonade</span>
          <span>$12.49</span>
        </div>
      </div>
      <div className="flex justify-between font-semibold py-4 border-t border-gray-200">
        <span>Total</span>
        <span>{convertToUSD(amount)}</span>
      </div>
      <div className="flex space-x-4">
        <Button
          onClick={onClick}
          className="flex-1  text-white  transition-all rounded-lg py-2 text-sm font-semibold"
        >
          See Details
        </Button>
      </div>
    </div>
  );
};

export default OrderCard;
