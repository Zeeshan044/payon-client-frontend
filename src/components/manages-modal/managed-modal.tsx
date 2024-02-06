import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { ModalViews } from "@/features/modal/modalSlice";
import { RootState } from "@/app/store";
import Modal from "../ui/modal";
const AddTableModal = lazy(() => import("@/components/modals/add-table.modal"));
const ViewOrderModal = lazy(
  () => import("@/components/modals/view-order.modal")
);
const ViewTableModal = lazy(
  () => import("@/components/modals/view-table.modal")
);
const AddProductModal = lazy(
  () => import("@/components/modals/add-product.modal")
);
const ViewRestaurant = lazy(
  () => import("@/components/modals/view-restaurant.modal")
);
const AddStaff = lazy(() => import("@/components/modals/add-staff.modal"));
function renderView(view: ModalViews) {
  switch (view) {
    case "VIEW_TABLE":
      return <ViewTableModal />;
    case "ADD_TABLE":
      return <AddTableModal />;
    case "VIEW_ORDER":
      return <ViewOrderModal />;
    case "ADD_PRODUCT":
      return <AddProductModal isOpen={true} onClose={() => {}} />;
    case "VIEW_RESTAURANT":
      return <ViewRestaurant />;
    case "ADD_STAFF":
      return <AddStaff />;
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
