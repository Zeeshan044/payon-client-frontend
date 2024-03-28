import Input from "@/components/ui/input";
import Button from "../ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    CategoryFormSchema,
    CategoryFormValues,
} from "@/schema/category-form.schema";
import {
    useUpdateCategoryMutation,
} from "@/services/data/category.data";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "@/features/category/categorySlice";
import { closeModal } from "@/features/modal/modalSlice";
import { toast } from "react-toastify";
import { ModalContent, ModalFooter } from "../ui/modal";
import { RootState } from "@/app/store";
import { useEffect } from "react";

interface Props {
    defaultValues?: CategoryFormValues | null;
    // onSubmit?: (formData: CategoryFormValues) => Promise<void>;
}

const UpdateCategory: React.FC<Props> = ({ defaultValues }) => {
    const dispatch = useDispatch();
    const { selectedCategory } = useSelector(
        (state: RootState) => state.category
    );
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm({
        resolver: yupResolver(CategoryFormSchema),
        defaultValues: selectedCategory || "",
    });
    console.log(selectedCategory, "default Category");
    useEffect(() => {
        if (selectedCategory) {
            setValue("name", selectedCategory.name);
            setValue("description", selectedCategory.description);
        }
    }, [selectedCategory, setValue]);

    const { mutate: updateCategory, isLoading: isLoadingUpdate } =
        useUpdateCategoryMutation();

    const onSubmit = (data: CategoryFormValues) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);

        if (selectedCategory) {
            updateCategory(
                // @ts-ignore
                { id: selectedCategory.id, data: formData },
                {
                    onSuccess() {
                        console.log("Category updated successfully:", data);
                        reset();
                        dispatch(setSelectedCategory(null));
                        dispatch(closeModal());
                        toast.success("Category updated successfully");
                    },
                }
            );
        }
    };



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="  ">
                <ModalContent>
                    <div className=" py-4 gap-4">
                        {/* <div className=" mb-6 gap-2 flex flex-col">
                            <h2 className=" text-lg text-primary font-semibold">Update Category</h2>
                            <p className=" text-gray-600 text-base font-normal">Update the dish category. Click save when you're done.</p>
                        </div> */}
                        <Input
                            {...register("name")}
                            id="name"
                            type="text"
                            label="Name"
                            name="name"
                            placeholder="Name"
                            error={errors.name?.message}
                        />
                        <Input
                            {...register("description")}
                            id="description"
                            type="text"
                            label="Description"
                            name="description"
                            // className=" h-40 py-0"
                            placeholder="Description"
                            error={errors.description?.message}
                        />
                    </div>
                </ModalContent>
                <ModalFooter>
                    <div className="flex justify-end items-end gap-3">
                        <Button onClick={() => dispatch(closeModal())}
                            variant="cancel" size="xl" type="submit">Cancel</Button>
                        <Button loading={isLoadingUpdate}
                            size="md" type="submit">Update Category</Button>
                    </div>
                </ModalFooter>
            </form>
        </div>
    );
};

export default UpdateCategory;
