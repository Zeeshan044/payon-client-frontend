import React, { useState } from "react";
import Input from "@/components/ui/input";
import Button from "../../ui/button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ProductFormSchema,
  ProductFormValues,
} from "@/schema/product-form.schema";
import IMAGES from "@/constants/images";
import { convertToUSD } from "@/utils";
import { useCreateProductMutation } from "@/services/data/product.data";

const ProductForm: React.FC = () => {
  const fileRef = React.useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(ProductFormSchema),
  });

  const [addons, setAddons] = useState<{ name: string; price: number }[]>([]);
  const [addonName, setAddonName] = useState("");
  const [addonPrice, setAddonPrice] = useState(0);
  const { mutate: createProduct } = useCreateProductMutation()


  const [imageInfo, setImageInfo] = useState({
    file: null as File | null,
    src: "",
  });

  const onSubmit = (data: ProductFormValues) => {
    console.log(data);
    const formData = new FormData()
    if (imageInfo.file) {
      formData.append("image", imageInfo.file);
    }
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("ingredients", data.ingredients)
    formData.append("price", data.price.toString());

    console.log("FormData:", formData);
    console.log("FormData:", formData);
    // createProduct(formData, {
    //   onSuccess() {
    //     reset();
    //     setImageInfo({ file: null, src: "" });
    //   },
    // });
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
          <div className="aspect-video rounded bg-slate-100 relative">
            <Image
              src={imageInfo?.src || IMAGES.NO_IMAGE}
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
          label="Name"
          placeholder="Enter name"
          error={errors.name?.message}
        />
        <Input
          {...register("description")}
          id="description"
          label="Description"
          placeholder="Enter description"
          error={errors.description?.message}
        />
        <Input
          {...register("ingredients")}
          id="ingredients"
          label="Ingredients"
          placeholder="What's in it?"
          error={errors.ingredients?.message}
        />
        <Input
          {...register("price")}
          id="price"
          type="number"
          label="Price"
          placeholder="What's the price?"
          error={errors.price?.message}
        />
        <div>
          <label htmlFor="category">Choose Category</label>
          <select
            className="w-full rounded-md bg-slate-200 px-3 py-2"
            name="category"
            id="category"
            defaultValue={"default"}
          >
            <option value="default" disabled>
              Select Category
            </option>
            <option value="cat1">Select Category</option>
            <option value="cat2">Category 1</option>
            <option value="cat3">Category 2</option>
            <option value="cat4">Category 3</option>
          </select>
        </div>

        {/* Addons List */}
        <div className="mt-4 border-t border-b py-4">
          <div className="grid grid-cols-3 gap-4">
            <Input
              className="grow"
              id="addon"
              name="addon"
              placeholder="Addon Name"
              onChange={(e) => setAddonName(e.target.value)}
            />
            <Input
              className="grow"
              type="number"
              id="addon_price"
              name="addon_price"
              placeholder="Addon Price"
              onChange={(e) => setAddonPrice(+e.target.value)}
            />
            <div>
              <Button
                className="w-full"
                type="button"
                onClick={() =>
                  setAddons((state) => [
                    ...state,
                    { name: addonName, price: addonPrice },
                  ])
                }
              >
                Insert Addon
              </Button>
            </div>
          </div>
          {addons.map((addon, index) => (
            <div key={index} className="flex justify-between mt-2">
              <span>{addon.name}</span>
              <span>{convertToUSD(addon.price)}</span>
            </div>
          ))}
        </div>
        <Button className="mt-4 w-full" type="submit">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
