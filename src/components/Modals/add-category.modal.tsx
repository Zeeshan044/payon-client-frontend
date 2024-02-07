import Modal from "../ui/modal";
import { useQueryClient } from "react-query";
import { useCreateProductMutation } from "@/services/data/product.data";
import { CategoryFormValues } from "@/schema/category-form.schema";
import CategoryForm from "../forms/category-form";
import { useState } from "react";

interface AddCategoryModalProps {
    isOpen: boolean;
    isClose?: boolean;
    children?: React.ReactNode;
    onClose?: () => void;
}

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({ isOpen, isClose, children, onClose }) => {
    const queryClient = useQueryClient();
    const { mutate } = useCreateProductMutation();

    const handleCategorySubmit = async (formData: CategoryFormValues) => {
        const formDataObject = new FormData();
        formDataObject.append("name", formData.name);
        formDataObject.append("description", formData.description);

        await mutate(formDataObject);
        queryClient.invalidateQueries("category");
    };

    return (
        <Modal isOpen={isOpen} isClose={isClose}>
            <div className="p-10">
                <CategoryForm onSubmit={handleCategorySubmit} />
            </div>
        </Modal>
    );
};

export default AddCategoryModal;
