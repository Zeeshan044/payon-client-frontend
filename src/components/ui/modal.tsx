import React from "react";
import { useDispatch } from "react-redux";
import { HiMiniXMark } from "react-icons/hi2";
import { closeModal } from "@/features/modal/modalSlice";
import Button from "./button";
import Back from "@/assets/images/back.svg"
import Image from "next/image";

interface Props {
  isOpen: boolean;
  title?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  isClose?: boolean;
}

const Modal: React.FC<Props> = ({ title, children, footer, isOpen, isClose }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 bg-black/50 z-50 justify-center items-center w-full md:inset-0 max-h-full flex ${!isOpen && "hidden"
          }`}
      >
        <div className="relative p-4 w-full max-w-3xl max-h-full text-black">
          {/* Modal content */}
          <div className="relative bg-white rounded-2xl shadow ">
            {/* Modal header */}
            <div className="flex items-center gap-3 p-4 md:py-5 md:px-8 border-b rounded-t ">
              <div className="rounded-full bg-blue-500 p-2 cursor-pointer"
                onClick={() => dispatch(closeModal())}>
                <Image src={Back} alt="back" />
              </div>
              <h3 className="text-xl font-semibold ">{title}</h3>
              {/* <Button
              >
                <HiMiniXMark className=" text-black " />
              </Button> */}
            </div>
            {/* Modal body */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export function ModalFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center p-4 md:py-5 md:px-8 border-t border-gray-200 rounded-b">
      <div className="grow">{children}</div>
    </div>
  );
}
export function ModalContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4 md:p-8 space-y-4">{children}</div>;
}
export default Modal;