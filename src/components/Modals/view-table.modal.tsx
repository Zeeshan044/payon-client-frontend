import React from "react";
import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import QRCode from "react-qr-code";
import { ModalContent, ModalFooter } from "../ui/modal";
import Button from "../ui/button";
import { useDeleteTableMutation } from "@/services/data/table.data";
import { closeModal } from "@/features/modal/modalSlice";
import { toast } from "react-toastify";

interface Props { }

const ViewTableModal: React.FC<Props> = ({ }) => {
  const { data } = useSelector((state: RootState) => state.modal);
  const { mutate, isLoading } = useDeleteTableMutation();
  const dispatch = useDispatch();

  const handleDelete = () => {
    mutate(data?.id, {
      onSuccess: () => {
        dispatch(closeModal());
        toast.success("Table deleted successfully");
      },
    });
  };

  return (
    <div>
      <>
        <ModalContent>
          <div className="mb-4 items-center flex justify-center">
            <QRCode
              type="url"
              value={JSON.stringify(data?.qr_link)}
              size={200}
            />
          </div>
        </ModalContent>
        <ModalFooter>
          <div className="flex justify-end gap-6">
            <Button onClick={handleDelete} className="bg-red-500">
              {isLoading ? "Deleting..." : "Delete"}
            </Button>
            <Button onClick={() => { }}>Download</Button>
          </div>
        </ModalFooter>
      </>
    </div>
  );
};

export default ViewTableModal;
