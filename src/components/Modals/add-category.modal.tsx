import { useSelector } from "react-redux";
import CategoryForm from "../forms/category-form";
import { RootState } from "@/app/store";

const AddCategoryModal: React.FC = () => {

  const modalState = useSelector((state: RootState) => state.modal);
  // const onUpdateImage = (imageSrc: string) => {
  //   console.log("Image source updated:", imageSrc);
  // };

  return (
    <div className="p-10">
      <CategoryForm defaultValues={modalState.data?.category} />
    </div>
  );
};

export default AddCategoryModal;
