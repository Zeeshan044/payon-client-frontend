import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { ModalViews } from "@/features/modal/modalSlice";
import { RootState } from "@/app/store";
import Modal from "../ui/modal";

const AddTableModal = lazy(() => import("@/components/Modals/add-table.modal"));
const ViewOrderModal = lazy(
  () => import("@/components/Modals/view-order.modal")
);
const ViewTableModal = lazy(
  () => import("@/components/Modals/view-table.modal")
);

function renderView(view: ModalViews) {
  switch (view) {
    case "VIEW_TABLE":
      return <ViewTableModal />;
    case "ADD_TABLE":
      return <AddTableModal />;
    case "VIEW_ORDER":
      return <ViewOrderModal />;
    default:
      return <></>;
  }
}

export default function ManagedModal() {
  const modalState = useSelector((state: RootState) => state.modal);

  return (
    <Modal isOpen={modalState.isOpen} title={modalState.data?.title || ""}>
      <Suspense fallback={<div>Loading...</div>}>
        {renderView(modalState.view)}
      </Suspense>
    </Modal>
  );
}
