import Modal from "../ui/modal";
import { useQueryClient } from "react-query";
import { useCreateProductMutation } from "@/services/data/product.data";
import ProductForm from "../forms/product-form";
import { ProductFormValues } from "@/schema/product-form.schema";

interface AddProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: (formData: ProductFormValues) => Promise<void>;
}

const AddProductModal: React.FC<AddProductModalProps> = () => {
    const queryClient = useQueryClient();
    const { mutate } = useCreateProductMutation();

    const handleProductSubmit = async (formData: ProductFormValues) => {
        const formDataObject = new FormData();
        formDataObject.append("name", formData.name);
        formDataObject.append("description", formData.description);
        formDataObject.append("ingredients", formData.ingredients);
        formDataObject.append("price", formData.price.toString());
        formDataObject.append("category_id", formData.category_id.toString());

        await mutate(formDataObject);
        queryClient.invalidateQueries("products");
    };

    return (
        <Modal isOpen={true}>
            <div className=" p-10">
                <ProductForm onClose={() => { handleProductSubmit }} />
            </div>
        </Modal>
    );
};

export default AddProductModal;
