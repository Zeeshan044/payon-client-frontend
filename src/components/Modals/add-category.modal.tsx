// import Modal from "../ui/modal";
// import { useQueryClient } from "react-query";
// import { useCreateProductMutation } from "@/services/data/product.data";
// import { CategoryFormValues } from "@/schema/category-form.schema";
import { useSelector } from "react-redux";
import CategoryForm from "../forms/category-form";
import { RootState } from "@/app/store";

// interface AddCategoryModalProps {
//   isOpen: boolean;
//   isClose?: boolean;
//   children?: React.ReactNode;
//   onClose?: () => void;
// }

const AddCategoryModal: React.FC = () => {
  const modalState = useSelector((state: RootState) => state.modal);

  return (
    <div className="p-10">
      <CategoryForm defaultValues={modalState.data?.category} />
    </div>
    // <Modal isOpen={isOpen} isClose={isClose}>
    // </Modal>
  );
};

export default AddCategoryModal;
