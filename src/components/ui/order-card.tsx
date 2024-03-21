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
    <div className=" bg-white shadow-md p-6 max-w-sm mx-auto rounded-cards">
      <div className="flex justify-between items-center">
        <div className="text-sm mb-2 flex gap-2">
          <div
            className="table-name text-white text-bold text-[23px]"
            style={{ padding: "16px 14px" }}
          >
            TA
          </div>
          <div className="font-semibold flex flex-col justify-around">
            <span className="text-base">Order# 925</span>
            <span className="text-xs">Dine in</span>
          </div>
        </div>
        <div>
          <span
            className={`${state === "pending" ? "bg-red-500" : "in-progress"
              } text-white text-xs rounded px-2 py-1 flex items-center gap-1 w-fit`}
          >
            {state === "pending" ? <IoMdStopwatch /> : <FaCheckDouble />}{" "}
            {computeName(state)}
          </span>
          {/* <div className="flex justify-end mt-1">
            <div className="block">
              <span className="cooking flex gap-1"><p style={{ background: 'rgba(82, 113, 255, 1)', height: '4px', width: '4px', borderRadius: '50%', marginTop: '2.5px' }}></p>Cooking Now</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="text-xs flex justify-between mb-2">
        <span>{createdAt}</span>
        <span>06:12 PM</span>
      </div>
      <div className="border-t border-gray-200 py-4">
        <div className="flex justify-between items-center items-headings">
          <span className="w-4/5">Items</span>
          <span className="w-1/5">Qty</span>
          <span className="w-1/5">Price</span>
        </div>
        <div className="flex justify-between items-center mb-2 items-names mt-2">
          <span className="w-4/5 ">Scrambled eggs with toast</span>
          <span className="w-1/5 ml-2">02</span>
          <span className="w-1/5">$16.99</span>
        </div>
        <div className="flex justify-between mb-2 items-names">
          <span className="w-4/5">Smoked Salmon Bagel</span>
          <span className="w-1/5 ml-2">02</span>
          <span className="w-1/5">$18.49</span>
        </div>
        <div className="flex justify-between mb-2 items-names">
          <span className="w-4/5">Belgian Waffles</span>
          <span className="w-1/5 ml-2">04</span>
          <span className="w-1/5">$38.98</span>
        </div>
        <div className="flex justify-between items-names">
          <span className="w-4/5">ClassNameic Lemonade</span>
          <span className="w-1/5 ml-2">03</span>
          <span className="w-1/5">$12.49</span>
        </div>
      </div>
      <div className="flex justify-between font-semibold py-4 border-t border-gray-200 ">
        <span className="text-[16px]" style={{ fontWeight: "400" }}>
          Total Price
        </span>
        <span>{convertToUSD(amount)}</span>
      </div>
      <div className="flex gap-4">
        <Button
          className="mark-ready grow rounded-sm text-sm"
          variant="secondary"
        >
          Mark as Ready
        </Button>
        <Button
          onClick={onClick}
          className="grow rounded-sm text-sm px-8 py-2"
        >
          See Details
        </Button>
      </div>
    </div>
  );
};

export default OrderCard;
