import React, { useState } from "react";
import Input from "@/components/ui/input";
import { HiPencil } from "react-icons/hi2";
import Button from "../ui/button";
import Image from "next/image";
import IMAGES from "@/constants/images";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserProfileFormSchema } from "@/schema/userProfile-form.schema";
import { ModalContent, ModalFooter } from "../ui/modal";
import { useCreateRestaurantMutation } from "@/services/data/restaurant.data";
import { useUpdateCategoryMutation } from "@/services/data/category.data";
import { RestaurantFormSchema, RestaurantFormValues } from "@/schema/restaurant-from.schema";
import { closeModal } from "@/features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { setSelectedrestaurant } from "@/features/restaurant/restaurantSlice";


const AddRestaurant = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(RestaurantFormSchema),
  });

  const { mutate: createRestaurant, isLoading } =
    useCreateRestaurantMutation();
  const fileRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [imageInfo, setImageInfo] = useState({
    file: null as File | null,
    src: "",
  });

  const onSubmit = (data: RestaurantFormValues) => {
    const { name, address, branch, email, phone } = data;
    const formData = new FormData();
    if (imageInfo.file) {
      formData.append("image", imageInfo.file);
    }
    formData.append("name", name);
    formData.append("branch", branch);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("phone", phone);

    createRestaurant(formData, {
      onSuccess() {
        reset();
        setImageInfo({ file: null, src: "" });
        dispatch(closeModal());
      },
    });
  }

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
        <div className="max-w-2xl mx-auto">
          <div className="aspect-video relative shadow-lg rounded-md border">
            <Image
              src={imageInfo?.src || IMAGES.NO_IMAGE}
              alt=""
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
              id="branch"
              name="branch"
              placeholder="Branch"
              label="Branch"
              error={errors.description?.message}
            />
          </div>
        </div>
      </ModalContent>
      <ModalFooter>
        <Button className="w-full" type="submit">
          Add Restaurant
        </Button>
      </ModalFooter>
    </form>
  );
};

export default AddRestaurant;
