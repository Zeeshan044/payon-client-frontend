import React from "react";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { QRCode } from 'react-qrcode-logo';
import { ModalContent, ModalFooter } from "../ui/modal";
import Button from "../ui/button";
import IMAGES from "@/constants/images";
import { useDeleteTableMutation } from "@/services/data/table.data";
import { closeModal } from "@/features/modal/modalSlice";

interface Props { }

const ViewTableModal: React.FC<Props> = ({ }) => {
  const { data } = useSelector((state: RootState) => state.modal);
  const deleteTableMutation = useDeleteTableMutation();

  const handleDelete = async () => {
    try {
      await deleteTableMutation.mutateAsync(data?.id);
      closeModal()
    } catch (error) {
      console.error("Error deleting table:", error);
    }
  };
  return (
    <div>
      <>
        <ModalContent>
          <div className="mb-4 items-center flex justify-center">
            <QRCode
              value={JSON.stringify(data?.qr_link)}
              size={200}
              logoImage={IMAGES.LOGO}
              logoHeight={60}
              logoWidth={60}
            />
          </div>
        </ModalContent>
        <ModalFooter>
          <div className="flex justify-end gap-6">
            <Button onClick={handleDelete} className="bg-red-500">
              Delete
            </Button>
            <Button onClick={() => { }}>Download</Button>
          </div>
        </ModalFooter>
      </>
    </div>
  );
};

export default ViewTableModal;
