import {
    useGetAllCategoriesQuery,
    useUpdateCategoryMutation,
} from "@/services/data/category.data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import React, { useState } from "react";
import Input from "@/components/ui/input";
import Button from "../ui/button";
import Select from "react-select";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { closeModal } from "@/features/modal/modalSlice";
import { ModalContent } from "../ui/modal";
import upload from "@/assets/images/image.svg"
import { useGetAllAllergensQuery } from "@/services/data/allergen.data";
import { ProductFormSchema, ProductFormValues } from "@/schema/product-form.schema";
import { useGetAllAddonsQuery } from "@/services/data/addon.data";
import { setSelectedProduct } from "@/features/product/productSlice";
import { IProductRequest } from "@/types/api";
import { useUpdateProductMutation } from "@/services/data/product.data";
interface Props {
    defaultValues?: ProductFormValues | null;
}

const UpdateProduct: React.FC<Props> = ({ defaultValues }) => {
    const fileRef = React.useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const { selectedProduct } = useSelector(
        (state: RootState) => state.product
    );
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm<ProductFormValues>({
        resolver: yupResolver(ProductFormSchema),
        defaultValues: selectedProduct || "",
    });
    console.log(selectedProduct, "Selected product");
    const [selectedAddons, setSelectedAddons] = useState<{ label: string; value: string }[]>([]);
    const [selectedAllergens, setSelectedAllergens] = useState<{ label: string; value: string }[]>([]);

    const { data } = useGetAllCategoriesQuery();
    const { data: addonsData } = useGetAllAddonsQuery();
    const { data: allergensData } = useGetAllAllergensQuery();

    const { mutate: UpdateProduct, isLoading: isLoadingUpdate } =
        useUpdateProductMutation();
    const [imageInfo, setImageInfo] = useState({
        file: null as File | null,
        src: "",
    });
    const onSubmit = (data: IProductRequest) => {
        const formData = new FormData();
        const { description, ingredients, name, price, category_id } =
            data;
        if (imageInfo.file) {
            formData.append("image", imageInfo.file as Blob);
        }
        formData.append("name", name);
        formData.append("description", description);
        formData.append("ingredients", ingredients);
        formData.append("price", price.toString());
        formData.append("category_id", category_id.toString());
        selectedAddons.forEach(addon => {
            formData.append("addons[]", addon.value);
        });

        if (selectedProduct) {
            UpdateProduct(
                // @ts-ignore
                { id: selectedProduct.id, data: formData },
                {
                    onSuccess() {
                        console.log("Product updated successfully:", data);
                        reset();
                        dispatch(setSelectedProduct(null));
                        dispatch(closeModal());
                        toast.success("Product updated successfully");
                    },
                }
            );
        }
    };
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImageInfo({
                file: e.target.files[0],
                src: URL.createObjectURL(e.target.files[0]),
            });
            setValue("image", URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div className=" ">
            <ModalContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className=" text-base font-medium">Product Image</p>
                    <div className=" bg-slate-100 gap-1 w-16 h-16 flex flex-col cursor-pointer items-center justify-center rounded" onClick={() => fileRef.current?.click()}
                    >
                        <input
                            // {...register()}
                            ref={fileRef}
                            hidden
                            type="file"
                            accept="image/*"
                            name="image"
                            id="image"
                            onChange={handleImageChange}
                        />
                        <Image src={imageInfo?.src || upload}
                            alt="picture"
                            width={20} height={20} />

                        <button className=" text-xs underline text-blue-400">Upload</button>
                    </div>
                    {errors.image && (
                        <span className="text-red-600 text-sm font-medium">
                            {errors.image?.message}
                        </span>
                    )}
                    <div className=" mt-6">
                        <p className=" text-base font-medium">Product Information</p>
                        <div className=" grid md:grid-cols-2 gap-x-6 mt-3">
                            <Input
                                {...register("name")}
                                id="name"
                                label="Product Name"
                                placeholder="Enter name"
                                error={errors.name?.message}
                            />
                            <Input
                                {...register("price")}
                                id="Product price"
                                type="number"
                                label="Price"
                                placeholder="What's the price?"
                                error={errors.price?.message}
                            />
                            <Input
                                {...register("ingredients")}
                                id="ingredients"
                                label="Ingredients"
                                placeholder="What's in it?"
                                error={errors.ingredients?.message}
                            />
                            <div>
                                <p className="text-charcoalGray">Category</p>
                                <select
                                    className="w-full rounded-lg bg-white px-4 mt-2 border-2 border-gray-300 py-2"
                                    id="category"
                                    defaultValue={"default"}
                                    {...register("category_id")}
                                >
                                    <option value="default" disabled className=" text-charcoalGray">
                                        Select Category
                                    </option>
                                    {data?.data.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.category_id && (
                                    <span className="text-red-600 text-sm font-medium">
                                        {"Caregory is required"}
                                    </span>
                                )}

                            </div>
                            {/* Allergens List */}
                            <div>
                                <p className="text-charcoalGray">Allergens</p>
                                <div className="mt-2">
                                    {allergensData && Array.isArray(allergensData.data) && (
                                        <Select
                                            value={selectedAllergens}
                                            onChange={(selectedOptions) => setSelectedAllergens(selectedOptions as { label: string; value: string }[])}
                                            options={allergensData.data.map(addon => ({ label: addon.name, value: addon.id.toString() }))}
                                            isMulti
                                        />
                                    )}
                                </div>
                            </div>
                            {/* Addons List */}
                            <div>
                                <p className="text-charcoalGray">Addons</p>
                                <div className="mt-2">
                                    {addonsData && Array.isArray(addonsData.data) && (
                                        <Select
                                            value={selectedAddons}
                                            onChange={(selectedOptions) => setSelectedAddons(selectedOptions as { label: string; value: string }[])}
                                            options={addonsData.data.map(addon => ({ label: addon.name, value: addon.id.toString() }))}
                                            isMulti
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button
                        className="mt-4 w-full"
                        type="submit"
                        loading={isLoadingUpdate}
                    >
                        Update Product
                    </Button>
                </form>
            </ModalContent>
        </div>
    );
};

export default UpdateProduct;
