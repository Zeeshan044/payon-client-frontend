import React from "react";
import Button from "./button";
import { convertToUSD } from "@/utils";

interface Props {
  tableName: string;
  orderCount: number;
  onClick: () => void;
  amount: number;
}

const OrderCard: React.FC<Props> = ({
  tableName,
  orderCount,
  amount,
  onClick,
}) => {
  return (
    <div className="flex flex-col gap-1 rounded-md shadow bg-slate-100 border border-primary py-2 px-4">
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold text-primary">{tableName}</div>
        <div className="text-lg font-medium">{convertToUSD(amount)}</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-lg font-medium">Order items: {orderCount}</div>
        <Button onClick={onClick} size="sm">
          View order
        </Button>
      </div>
    </div>
  );
};

export default OrderCard;
