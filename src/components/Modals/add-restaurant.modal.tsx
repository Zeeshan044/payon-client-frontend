import React, { useState } from "react";
import Input from "@/components/ui/input";
import { HiPencil } from "react-icons/hi2";
import Button from "../ui/button";
import Image from "next/image";
import IMAGES from "@/constants/images";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalContent, ModalFooter } from "../ui/modal";
import { useCreateRestaurantMutation } from "@/services/data/restaurant.data";
import {
  RestaurantFormSchema,
  RestaurantFormValues,
} from "@/schema/restaurant-from.schema";
import { closeModal } from "@/features/modal/modalSlice";
import { useDispatch } from "react-redux";

const AddRestaurant = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(RestaurantFormSchema),
  });

  const { mutate: createRestaurant, isLoading } = useCreateRestaurantMutation();
  const fileRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [imageInfo, setImageInfo] = useState({
    file: null as File | null,
    src: "",
  });

  const onSubmit = (data: RestaurantFormValues) => {
    const { name, address, branch, email, phone, description } = data;
    const formData = new FormData();
    if (imageInfo.file) {
      formData.append("cover_image", imageInfo.file);
      formData.append("profile_image", imageInfo.file);
    }
    formData.append("name", name);
    formData.append("branch", branch);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("descriptiom", description);
    console.log(formData, "formData");
    createRestaurant(formData, {
      onSuccess(data) {
        console.log("Restaurant added successfully:", data);
        reset();
        setImageInfo({ file: null, src: "" });
        dispatch(closeModal());
      },
      onError(error) {
        console.error("Error adding restaurant:", error);
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalContent>
        {errors.cover_image?.message && (
          <div className="text-red-500 text-sm">
            {errors.cover_image?.message}
          </div>
        )}
        {errors.profile_image?.message && (
          <div className="text-red-500 text-sm">
            {errors.profile_image?.message}
          </div>
        )}
        <div className="max-w-2xl mx-auto">
          <div className="aspect-video relative shadow-lg rounded-md border">
            <Image
              src={imageInfo?.src || IMAGES.NO_IMAGE}
              alt=""
              // width={100}
              fill
              className="w-full h-full object-cover rounded-md"
              onClick={() => fileRef.current?.click()}
            />
            <input
              type="file"
              className="hidden"
              ref={fileRef}
              onChange={handleImageChange}
            />
            <div className="absolute -bottom-3 right-5 -translate-x-1/2 text-black z-10 bg-primary rounded-full ">
              <div className="h-8 w-8 flex items-center justify-center">
                <HiPencil className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="md:w-40 md:h-40 w-24 h-24 rounded-full absolute -bottom-12 md:-bottom-20 left-1/2 -translate-x-1/2 border shadow">
              <Image
                src={imageInfo?.src || IMAGES.NO_IMAGE}
                alt=""
                // width={100}
                fill
                className="w-full h-full rounded-full object-cover"
                onClick={() => fileRef.current?.click()}
              />
              <div className="absolute bottom-0 -right-2 -translate-x-1/2 text-black z-10 bg-blue-500 rounded-full ">
                <div className="h-8 w-8 flex items-center justify-center">
                  <HiPencil className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-24">
            <Input
              {...register("name")}
              id="name"
              name="name"
              placeholder="name"
              label="Name"
              error={errors.name?.message}
            />
            <Input
              {...register("branch")}
              id="branch"
              name="branch"
              placeholder="branch"
              label="Branch"
              error={errors.branch?.message}
            />
            <Input
              {...register("email")}
              id=""
              name="email"
              placeholder="email"
              label="Email"
              error={errors.email?.message}
            />
            <Input
              {...register("phone")}
              id=""
              name="phone"
              placeholder="phone"
              label="Phone"
              error={errors.phone?.message}
            />
            <Input
              {...register("address")}
              id=""
              name="address"
              placeholder="address"
              label="Address"
              error={errors.address?.message}
            />
            <Input
              {...register("description")}
              id="description"
              name="description"
              placeholder="description"
              label="description"
              error={errors.description?.message}
            />
          </div>
        </div>
      </ModalContent>
      <ModalFooter>
        <Button
          className="w-full"
          type="submit"
          onSubmit={handleSubmit(onSubmit)}
        >
          Add Restaurant
        </Button>
      </ModalFooter>
    </form>
  );
};

export default AddRestaurant;
