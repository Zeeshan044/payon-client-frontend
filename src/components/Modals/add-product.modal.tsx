import ProductForm from "../forms/product-form";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";


const AddProductModal: React.FC = () => {
    const modalState = useSelector((state: RootState) => state.modal);
    return (
        <div className=" p-10">
            <ProductForm defaultValues={modalState.data?.category} />
        </div>
    );
};

export default AddProductModal;
