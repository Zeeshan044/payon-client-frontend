import React, { useState } from "react";
import Input from "@/components/ui/input";
import Button from "../ui/button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductFormSchema, ProductFormValues } from "@/schema/product-form.schema";
import IMAGES from "@/constants/images";
import { convertToUSD } from "@/utils";
import { useCreateProductMutation, useGetAllProductsQuery, useUpdateProductMutation } from "@/services/data/product.data";
import { toast } from "react-toastify";
import { closeModal } from "@/features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "@/features/product/productSlice";
import { useGetAllCategoriesQuery } from "@/services/data/category.data";
import { ICategoryRequest, IProductRequest } from "@/types/api";

interface ProductFormProps {
  defaultValues?: ProductFormValues;
  // onUpdateImage: (imageSrc: string) => void;

}

const ProductForm: React.FC<ProductFormProps> = ({ defaultValues }) => {
  const fileRef = React.useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormValues>({
    resolver: yupResolver(ProductFormSchema),
    defaultValues: defaultValues,
  });

  const [addons, setAddons] = useState<{ name: string; price: number }[]>([]);
  const [addonName, setAddonName] = useState("");
  const [addonPrice, setAddonPrice] = useState(0);

  const { data } = useGetAllCategoriesQuery();
  const { mutate: createProduct, isLoading: isLoadingCreate } = useCreateProductMutation();
  const { mutate: updateCategory, isLoading: isLoadingUpdate } = useUpdateProductMutation();
  const dispatch = useDispatch()
  const [imageInfo, setImageInfo] = useState({
    file: null as File | null,
    src: defaultValues?.image || "",
  });

  const onSubmit = (data: IProductRequest) => {
    const { description, ingredients, name, price, category_id } = data;
    const formData = new FormData();
    if (imageInfo.file) {
      formData.append("image", imageInfo.file as Blob);
    }
    formData.append("name", name);
    formData.append("description", description);
    formData.append("ingredients", ingredients);
    formData.append("price", price.toString());
    formData.append("category_id", category_id.toString());

    if (defaultValues) {
      updateCategory(
        // @ts-ignore
        { id: defaultValues.id, data: formData },
        {
          onSuccess() {
            reset();
            setImageInfo({ file: null, src: "" });
            dispatch(setSelectedProduct(null));
            // onUpdateImage(imageInfo.src);
            // dispatch(closeModal());
          },
        }
      )
    } else {
      createProduct(formData, {
        onSuccess() {
          reset();
          setImageInfo({ file: null, src: "" });
          // onUpdateImage(imageInfo.src);
          // dispatch(closeModal())
        },
      });
    };
  }
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files) {
        setImageInfo({
          file: e.target.files[0],
          src: URL.createObjectURL(e.target.files[0]),
        });
      }
    } catch (error) {
      toast.error("Failed to load the image");
    }
  };

  return (
    <div className=" ">
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
            id="category"
            defaultValue={"default"}
            {...register("category_id")}
          >
            <option value="default" disabled>
              Select Category
            </option>
            {data?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
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
        <Button className="mt-4 w-full" type="submit" loading={isLoadingCreate || isLoadingUpdate}
        // onClick={() => { dispatch(closeModal()) }}
        >
          {defaultValues ? "Update Product" : "Add Product"}
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
