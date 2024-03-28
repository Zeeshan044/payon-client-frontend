import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/features/modal/modalSlice";
import { useDeleteCategoryMutation } from "@/services/data/category.data";
import { toast } from "react-toastify";
import { ModalContent, ModalFooter } from "../ui/modal";
import Button from "../ui/button";
import { RootState } from "@/app/store";
import { setSelectedCategory } from "@/features/category/categorySlice";

const DeleteCategory: React.FC = () => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state: RootState) => state.category.selectedCategory);

    const { mutate: deleteCategory, isLoading: isLoadingDelete } =
        useDeleteCategoryMutation();

    const handleDeleteCategory = () => {
        if (selectedCategory) {
            dispatch(closeModal());
            deleteCategory(selectedCategory.id, {
                onSuccess: () => {
                    dispatch(setSelectedCategory(null));
                    toast.success("Category deleted successfully");
                },
                onError: (error) => {
                    console.error("Error deleting category:", error);
                    toast.error("Error deleting category");
                },
            });
        }
        // deleteCategory(selectedCategory.id, {
        //     onSuccess: () => {
        //         dispatch(closeModal());
        //         dispatch(setSelectedCategory(null));
        //         toast.success("Category deleted successfully");
        //     },
        //     onError: (error) => {
        //         console.error("Error deleting category:", error);
        //         toast.error("Error deleting category");
        //     },
        // });
    };

    return (
        <div>
            <ModalContent>
                <div className="px-6 gap-4">
                    <div className="mb-6 gap-2 flex flex-col">
                        <h2 className="text-lg font-semibold">
                            Are you sure you want to delete the category?
                        </h2>
                        <p className="text-gray-600 text-base font-normal">
                            Deleting this category will remove its details from the system.
                            This action cannot be undone.
                        </p>
                    </div>
                </div>
            </ModalContent>
            <ModalFooter>
                <div className="flex justify-end items-end gap-3">
                    <Button
                        onClick={() => dispatch(closeModal())}
                        variant="cancel"
                        size="xl"
                        type="button"
                    >
                        Cancel
                    </Button>
                    <Button
                        loading={isLoadingDelete}
                        onClick={() => handleDeleteCategory()}
                        size="md"
                        type="button"
                    >
                        Delete Category
                    </Button>
                </div>
            </ModalFooter>
        </div>
    );
};

export default DeleteCategory;
