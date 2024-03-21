import { useSelector } from "react-redux";
import Button from "../ui/button";
import { ModalContent, ModalFooter } from "../ui/modal";
import { RootState } from "@/app/store";
import { OrderItem } from "@/types";
import OrderItemCard from "../ui/order-item-card";
import { convertToUSD } from "@/utils";

export default function ViewOrderModal() {
  const modalState = useSelector((state: RootState) => state.modal);

  return (
    <>
      <ModalContent>
        <div className="text-dark">
          <div className="flex justify-between items-center">
            <div className=" mb-6 flex gap-4">
              <div
                className="table-name text-white font-bold text-2xl px-4 py-4 rounded-xl"
              >
                TA
              </div>
              <div className="font-semibold flex flex-col justify-around">
                <span className=" text-3xl">Order# 925</span>
                <span className="text-lg text-darkGrey">Dine in</span>
              </div>
            </div>
            <div className=" gap-2 flex flex-col items-end">
              <p className=" text-2xl">Fri, Mar 08, 2024</p>
              <p className=" text-base">07:18 PM</p>
            </div>
          </div>
        </div>
        <div className="order-pop-up  py-4 px-5 text-dark">
          <h3 className=" text-2xl font-medium" >Order Details</h3>
          <div className="flex justify-between mt-2 text-lg font-medium">
            <span className="font-normal text-darkGrey">Chicken Cheese Naan with Raita<span className="block text-black font-medium ">$23.56</span></span>
            <span className="text-base " >1x</span>
          </div>
          <div className="flex justify-between mt-2 text-lg font-medium">
            <span className="font-normal text-darkGrey">Chicken Cheese Naan with Raita<span className="block text-black font-medium ">$23.56</span></span>
            <span className="text-base " >1x</span>
          </div>
          <div className="flex justify-between mt-2 text-lg font-medium">
            <span className="font-normal text-darkGrey">Chicken Cheese Naan with Raita<span className="block text-black font-medium ">$23.56</span></span>
            <span className="text-base " >1x</span>
          </div>
          <div className="flex justify-between mt-2 text-lg font-medium">
            <span className="font-normal text-darkGrey">Chicken Cheese Naan with Raita<span className="block text-black font-medium ">$23.56</span></span>
            <span className="text-base " >1x</span>
          </div>
          <div className="flex justify-between mt-2 text-lg font-medium">
            <span className="font-normal text-darkGrey">Chicken Cheese Naan with Raita<span className="block text-black font-medium ">$23.56</span></span>
            <span className="text-base " >1x</span>
          </div>
          <div className="flex justify-between mt-4 text-lg font-bold">
            <span className="font-normal">Items(5)</span>
            <span >$600.00</span>
          </div>
          <div className="flex justify-between mt-2 text-lg font-bold">
            <span className="font-normal">Tax(5%)</span>
            <span >$30.00</span>
          </div>
          <div className="flex justify-between mt-6 text-2xl font-bold">
            <span >Total</span>
            <span >$630.00</span>
          </div>
        </div>
      </ModalContent>

    </>
  );
}
