import React, { useEffect } from "react";
import Input from "@/components/ui/input";
import { HiPencil } from "react-icons/hi2";
import Button from "../ui/button";
import Image from "next/image";
import IMAGES from "@/constants/images";
import { useGetProfileQuery } from "@/services/data/userProfile.data";
import { IUserResponse } from "@/types/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  UserProfileFormSchema,
  UserProfileFormValues,
} from "@/schema/userProfile-form.schema";

const UserProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(UserProfileFormSchema),
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      reset(userData);
    }
  }, [reset]);

  const onSubmit = async (formData: UserProfileFormValues) => {
    console.log("Updating user data:", formData);
    localStorage.setItem("user", JSON.stringify(formData));
  };

  return (
    <div className="border rounded-2xl ml-2 p-6 shadow bg-white">
      <div>
        <h1 className="text-4xl font-bold mb-6 text-gray-700">Profile</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center">
          <div className="md:w-40 md:h-40 w-24 h-24 rounded-full  border shadow relative mt-8">
            <Image
              src={IMAGES.NO_IMAGE}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute bottom-0 -right-2 -translate-x-1/2 text-black z-10 bg-blue-500 rounded-full ">
              <div className="h-8 w-8 flex items-center justify-center">
                <HiPencil className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
          <div className="mt-4 w-full">
            <Input
              {...register("name")}
              id="name"
              name="name"
              placeholder="name"
              label="Name"
              error={errors.name?.message}
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
            <Button className="w-full mt-6 " type="submit">
              Update
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
