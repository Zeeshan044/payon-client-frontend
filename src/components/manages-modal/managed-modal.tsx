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
const AddCategoryModal = lazy(() => import("@/components/modals/add-category.modal"));
const AddProductModal = lazy(
  () => import("@/components/modals/add-product.modal")
);
const AddRestaurant = lazy(
  () => import("@/components/modals/add-restaurant.modal")
);
const ViewRestaurant = lazy(() => import("@/components/modals/view-restaurant.modal"))
const AddStaff = lazy(() => import("@/components/modals/add-staff.modal"));
const UpdateStaff = lazy(() => import("@/components/modals/update-staff.modal"));
const DeleteStaff = lazy(() => import("@/components/modals/delete-staff.modal"));
const UpdateRestaurant = lazy(() => import("@/components/modals/update-restaurant.modal"));
function renderView(view: ModalViews) {
  switch (view) {
    case "VIEW_TABLE":
      return <ViewTableModal />;
    case "ADD_TABLE":
      return <AddTableModal />;
    case "VIEW_ORDER":
      return <ViewOrderModal />;
    case "ADD_PRODUCT":
      return <AddProductModal />;
    case "ADD_CATEGORY":
      return <AddCategoryModal />;
    case "ADD_RESTAURANT":
      return <AddRestaurant />;
    case "VIEW_RESTAURANT":
      return <ViewRestaurant />;
    case "UPDATE_RESTAURANT":
      return <UpdateRestaurant />;
    case "ADD_STAFF":
      return <AddStaff />;
    case "UPDATE_STAFF":
      return <UpdateStaff />
    case "DELETE_STAFF":
      return <DeleteStaff />
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
