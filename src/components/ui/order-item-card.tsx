import React from "react";
import { Order, OrderItem, PaymentMode } from "@/types";
interface Props {
  data: OrderItem;
  index: number;
}

const OrderItemCard: React.FC<Props> = ({ data, index }) => {
  const {} = data;
  return (
    <div className="border rounded-md shadow bg-gray-100 p-3">
      <div className="bg-black leading-none text-white rounded-full h-5 w-5 font-bold flex items-center justify-center mb-2">
        {index}
      </div>
      <div>
        <div className="flex items-center justify-between font-bold">
          <span>{data.name}</span>
          <span>{data.price}</span>
        </div>
        <div className="font-bold">Addons:</div>
        <div className="pl-2">
          {data.addons.map((addon) => (
            <div
              key={addon.id}
              className="flex items-center justify-between font-medium"
            >
              <span>{addon.name}</span>
              <span>+{addon.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;
