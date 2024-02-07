import React from "react";
import { useDispatch } from "react-redux";
import { HiMiniXMark } from "react-icons/hi2";
import { closeModal } from "@/features/modal/modalSlice";
import Button from "./button";

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
          <div className="relative bg-white  rounded-lg shadow ">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl font-semibold ">{title}</h3>
              <Button
                className="bg-transparent "
                onClick={() => dispatch(closeModal())}
              >
                <HiMiniXMark className=" text-black " size={30} />
              </Button>
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
    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
      <div className="grow">{children}</div>
    </div>
  );
}
export function ModalContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4 md:p-5 space-y-4">{children}</div>;
}
export default Modal;
