import React from "react";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import QRCode from "react-qr-code";
import { ModalContent, ModalFooter } from "../ui/modal";
import Button from "../ui/button";

interface Props {}

const ViewTableModal: React.FC<Props> = ({}) => {
  const { data } = useSelector((state: RootState) => state.modal);

  return (
    <div>
      <>
        <ModalContent>
          <div className="mb-4 items-center flex justify-center">
            <QRCode value={JSON.stringify(data?.id)} size={200} />
          </div>
        </ModalContent>
        <ModalFooter>
          <div className="flex justify-end gap-6">
            <Button onClick={() => {}} className="bg-red-500">
              Delete
            </Button>
            <Button onClick={() => {}}>Download</Button>
          </div>
        </ModalFooter>
      </>
    </div>
  );
};

export default ViewTableModal;
