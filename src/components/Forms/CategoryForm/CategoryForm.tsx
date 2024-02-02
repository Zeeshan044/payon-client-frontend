import React, { useState } from "react";
import Input from "@/components/ui/input";
import Button from "../../ui/button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CategoryFormSchema,
  CategoryFormValues,
} from "@/schema/category-form.schema";
import IMAGES from "@/constants/images";
import { useCreateCategoryMutation } from "@/services/data/category.data";

const CategoryForm: React.FC = () => {
  const fileRef = React.useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CategoryFormSchema),
  });
  const { mutate: createCategory, isLoading } = useCreateCategoryMutation();
  const [imageInfo, setImageInfo] = useState({
    file: null as File | null,
    src: "",
  });

  const onSubmit = (data: CategoryFormValues) => {
    console.log("Image File:", imageInfo.file);
    const formData = new FormData();
    if (imageInfo.file) {
      formData.append("image", imageInfo.file);
    }
    formData.append("name", data.name);
    formData.append("description", data.description);
    console.log("FormData:", formData);
    createCategory(formData, {
      onSuccess() {
        reset();
        setImageInfo({ file: null, src: "" });
      },
    });
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
            <img
              src={imageInfo.src || IMAGES.NO_IMAGE}
              // fill
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
        <Button className="mt-4 w-full" type="submit">
          Add Category
        </Button>
      </form>
    </div>
  );
};

export default CategoryForm;
