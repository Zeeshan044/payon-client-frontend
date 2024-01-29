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

const CategoryForm: React.FC = () => {
  const fileRef = React.useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CategoryFormSchema),
  });

  const [imageInfo, setImageInfo] = useState({
    file: null as File | null,
    src: "",
  });

  const onSubmit = (data: CategoryFormValues) => {
    console.log(data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) =>
        setImageInfo({ file, src: event.target?.result as string });
      reader.readAsDataURL(file);
    } else {
      setImageInfo({ file: null, src: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="aspect-video rounded bg-primary/50 relative">
            <Image
              src={imageInfo.src || IMAGES.NO_IMAGE}
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
        <Button className="mt-4 w-full" type="submit">
          Add Category
        </Button>
      </form>
    </div>
  );
};

export default CategoryForm;
