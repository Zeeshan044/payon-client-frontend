import React from "react";

const OrderDashboardCard = () => {
  return (
    <div className="bg-white p-6 w-full mx-auto rounded-lg shadow-2xl ">
      <div className="text-black text-2xl mb-4">Latest Order</div>

      <div
        className="bg-[#697EFF] p-4 rounded-lg mb-4"
        style={{ borderRight: "6px solid #0305FF" }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="text-white font-bold">Order #1234</div>
          <div className="text-purple-300">Pending</div>
        </div>
        <div className="text-purple-200">Order Time: 06:45 PM</div>
      </div>

      <div className="bg-[#697EFF] p-4 rounded-lg mb-4">
        <div className="mb-2">
          <div className="text-white font-bold">Customer: John Doe</div>
        </div>
        <div className="text-purple-200">Table No: 5</div>
      </div>

      <div className="bg-[#697EFF] p-4 rounded-lg">
        <div className="mb-2">
          <div className="text-white font-bold">Items Ordered</div>
        </div>
        <ul className="text-purple-200">
          <li>2x Grilled Salmon</li>
          <li>1x Caesar Salad</li>
          <li>3x Lemonade</li>
        </ul>
      </div>
    </div>
  );
};

export default OrderDashboardCard;
