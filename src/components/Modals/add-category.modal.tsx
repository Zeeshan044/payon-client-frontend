import React, { useState } from "react";
import Input from "@/components/ui/input";
import Button from "../ui/button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CategoryFormSchema,
  CategoryFormValues,
} from "@/schema/category-form.schema";
import IMAGES from "@/constants/images";
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "@/services/data/category.data";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "@/features/category/categorySlice";
import { closeModal } from "@/features/modal/modalSlice";
import { toast } from "react-toastify";
import { ModalContent, ModalFooter } from "../ui/modal";


const AddCategory = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    resolver: yupResolver(CategoryFormSchema),
    // defaultValues: { name: "", description: "" },
  });

  const { mutate: createCategory, isLoading: isLoadingCreate } =
    useCreateCategoryMutation();

  const onSubmit = (data: CategoryFormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);

    createCategory(formData, {
      onSuccess() {
        reset();
        dispatch(closeModal());
        toast.success("Category added successfully");
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

        <ModalContent>
          <div className="  py-4 gap-4">
            {/* <div className=" mb-6 gap-2 flex flex-col">
              <h2 className=" text-lg text-primary font-semibold">New Category</h2>
              <p className=" text-gray-600 text-base font-normal">Add the new dish category. Click save when you're done.</p>
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
              variant="cancel" type="submit">Cancel</Button>
            <Button loading={isLoadingCreate} size="md" type="submit">Add Category</Button>
          </div>
        </ModalFooter>
      </form>

    </div>
  );
};

export default AddCategory;
