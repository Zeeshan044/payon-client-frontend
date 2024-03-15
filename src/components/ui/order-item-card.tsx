import React from "react";
import { Order, OrderItem, PaymentMode } from "@/types";
interface Props {
  data: 1;
  index: 1;
}

const OrderItemCard=() => {
  return (
    <div className="order-pop-up m-3 p-4">
   <h3 className="text-[16px] font-bold" style={{color:'rgba(32, 32, 32, 1)'}}>Order Details</h3>
   <div className="flex justify-between mt-2">
   <span className="text-[13px] font-normal">Chicken Cheese Naan with Raita<span className="block text-10 font-semibold">$23.56</span></span>
   <span className="text-[15px] font-bold" style={{color:'rgba(32, 32, 32, 1)'}}>1x</span>
   </div>
   <div className="flex justify-between mt-2">
   <span className="text-[13px] font-normal">Chicken Cheese Naan with Raita<span className="block text-10 font-semibold">$23.56</span></span>
   <span className="text-[15px] font-bold" style={{color:'rgba(32, 32, 32, 1)'}}>1x</span>
   </div>
   <div className="flex justify-between mt-2">
   <span className="text-[13px] font-normal">Chicken Cheese Naan with Raita<span className="block text-10 font-semibold">$23.56</span></span>
   <span className="text-[15px] font-bold" style={{color:'rgba(32, 32, 32, 1)'}}>1x</span>
   </div>
   <div className="flex justify-between mt-2">
   <span className="text-[13px] font-normal">Chicken Cheese Naan with Raita<span className="block text-10 font-semibold">$23.56</span></span>
   <span className="text-[15px] font-bold" style={{color:'rgba(32, 32, 32, 1)'}}>1x</span>
   </div>
   <div className="flex justify-between mt-2">
   <span className="text-[13px] font-normal">Chicken Cheese Naan with Raita<span className="block text-10 font-semibold">$23.56</span></span>
   <span className="text-[15px] font-bold" style={{color:'rgba(32, 32, 32, 1)'}}>1x</span>
   </div>
   <div  className="flex justify-between mt-2">
   <span className="text-[13px] font-normal">Items(5)</span>
   <span className="text-[15px] font-bold" style={{color:'rgba(32, 32, 32, 1)'}}>$600.00</span>
   </div>
   <div  className="flex justify-between mt-2">
   <span className="text-[13px] font-normal">Tax(5%)</span>
   <span className="text-[14px] font-bold" style={{color:'rgba(32, 32, 32, 1)'}}>$30.00</span>
   </div>
   <div  className="flex justify-between mt-2">
   <span className="text-[15px] font-bold" style={{color:'rgba(32, 32, 32, 1)'}}>Total</span>
   <span className="text-[16px] font-bold" style={{color:'rgba(32, 32, 32, 1)'}}>$630.00</span>
   </div>
    </div>
  );
};

export default OrderItemCard;
