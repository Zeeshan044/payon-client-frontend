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

interface Props {
  defaultValues?: CategoryFormValues;
  onClose?: () => void;
  onSubmit?: (formData: CategoryFormValues) => Promise<void>;
}

const CategoryForm: React.FC<Props> = ({ defaultValues }) => {
  const fileRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CategoryFormSchema),
    defaultValues: defaultValues,
  });

  const { mutate: createCategory, isLoading: isLoadingCreate } =
    useCreateCategoryMutation();
  const { mutate: updateCategory, isLoading: isLoadingUpdate } =
    useUpdateCategoryMutation();
  const [imageInfo, setImageInfo] = useState({
    file: null as File | null,
    src: "",
  });

  const onSubmit = (data: CategoryFormValues) => {
    const formData = new FormData();
    if (imageInfo.file) {
      formData.append("image", imageInfo.file);
    }
    formData.append("name", data.name);
    formData.append("description", data.description);

    // console.log("form data", formData);
    // console.log("default values", defaultValues);

    if (defaultValues) {
      updateCategory(
        // @ts-ignore
        { id: defaultValues.id, data: formData },
        {
          onSuccess() {
            reset();
            setImageInfo({ file: null, src: "" });
            dispatch(setSelectedCategory(null));
            dispatch(closeModal());
          },
        }
      );
    } else {
      createCategory(formData, {
        onSuccess() {
          reset();
          setImageInfo({ file: null, src: "" });
        },
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageInfo({
        file: e.target.files[0],
        src: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="aspect-video rounded bg-primary/50 relative">
            <Image
              src={imageInfo.src || IMAGES.NO_IMAGE}
              // src={{ src: imageInfo.src || IMAGES.NO_IMAGE }}
              fill
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mt-2">
          <Button
            type="button"
            className="w-full"
            onClick={() => fileRef.current?.click()}
          >
            Add Image
          </Button>
          <input
            ref={fileRef}
            hidden
            type="file"
            accept="image/*"
            name="image"
            id="image"
            onChange={handleImageChange}
          />
        </div>
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
          placeholder="Description"
          error={errors.description?.message}
        />
        <Button
          loading={isLoadingCreate || isLoadingUpdate}
          className="mt-4 w-full"
          type="submit"
        >
          {defaultValues ? "Update Category" : "Add Category"}
        </Button>
      </form>
    </div>
  );
};

export default CategoryForm;
