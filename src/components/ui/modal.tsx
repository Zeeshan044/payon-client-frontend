import React from "react";
import { useDispatch } from "react-redux";
import { HiMiniXMark } from "react-icons/hi2";
import { closeModal } from "@/features/modal/modalSlice";
import Order from "./order-item-card";
import Button from "./button";

interface Props {
  isOpen: boolean;
  title?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  isClose?: boolean;
}

const Modal: React.FC<Props> = ({
  title,
  children,
  footer,
  isOpen,
  isClose,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 bg-black/50 z-50 justify-center items-center w-full md:inset-0 max-h-full flex ${
          !isOpen && "hidden"
        }`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full text-black ">
          {/* Modal content */}
          <div className="relative bg-white  rounded-lg shadow ">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3
                className="text-xl font-bold"
                style={{ color: "rgba(82, 113, 255, 1)" }}
              >
                Order Details
              </h3>
              <Button
                className="bg-transparent "
                onClick={() => dispatch(closeModal())}
              >
                <HiMiniXMark className=" text-black " size={30} />
              </Button>
            </div>
            <div className="flex justify-between">
              <div className="text-sm mb-2 flex  items-center">
                <div className="h-[70px] flex items-center justify-center  w-[70px]">
                  <span
                    className="table-name text-white text-bold text-[23px]"
                    style={{ padding: "16px 14px" }}
                  >
                    TA
                  </span>
                </div>
                <span className="text-[16px] font-[600]">
                  {title}
                  <span className="text-[10px] block">Dine in</span>
                </span>
              </div>
              <div className="mt-1 p-3">
                <span className="text-black font-bold text-[14px]">
                  Fri, Mar 08, 2024
                  <span className="block text-black font-semibold text-[13px]">
                    07:18 PM
                  </span>
                </span>
              </div>
            </div>
            <Order />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export function ModalFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
      <div className="grow">{children}</div>
    </div>
  );
}

export default Modal;
