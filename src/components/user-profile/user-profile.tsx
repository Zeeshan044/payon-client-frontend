import React, { useEffect, useState } from "react";
import Input from "@/components/ui/input";
import { HiPencil } from "react-icons/hi2";
import Button from "../ui/button";
import Image from "next/image";
import IMAGES from "@/constants/images";
import { useUpdateProfileMutation } from "@/services/data/userProfile.data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  UserProfileFormSchema,
  UserProfileFormValues,
} from "@/schema/userProfile-form.schema";
import { toast } from "react-toastify";
interface Props {
  defaultValues?: UserProfileFormValues | null;
}

const UserProfile = ({ defaultValues }: Props) => {
  const [storedUserData, setStoredUserData] = useState<UserProfileFormValues>(
    JSON.parse(localStorage.getItem("user") || "{}")
  ); const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<UserProfileFormValues>({
    resolver: yupResolver(UserProfileFormSchema),
    defaultValues: {},
  });
  console.log(defaultValues?.image, "ye image ha");
  console.log(storedUserData, "ye stored image ha");
  useEffect(() => {
    reset(storedUserData);
  }, [storedUserData, reset]);
  const [image, setImage] = useState({
    file: null as File | null,
    src: storedUserData?.image || IMAGES.NO_IMAGE,
  });
  console.log(storedUserData?.image, "image from storedUserData");
  const { mutate: updateProfile, isLoading: isLoadingUpdate } =
    useUpdateProfileMutation();
  const imageRef = React.useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   const storedUserData = JSON.parse(localStorage.getItem("user") || "{}");
  //   reset(storedUserData);
  //   if (storedUserData.image) {
  //     setImage({
  //       file: null,
  //       src: storedUserData.image,
  //     });
  //   }
  // }, [reset]);

  const onSubmit = async (userData: UserProfileFormValues) => {
    const formData = new FormData();
    if (image.file) {
      formData.append("image", image.file as Blob);
    }
    console.log("Updating user data:", userData);

    const storedUserData = JSON.parse(localStorage.getItem("user") || "");
    console.log(storedUserData, "defaultValues of user");
    if (storedUserData) {
      updateProfile({
        id: storedUserData.id, data: userData,
      },
        {
          onSuccess: () => {
            console.log("Updated user data:", userData);
            const updatedUserData = { ...storedUserData, ...userData };
            localStorage.setItem("user", JSON.stringify(updatedUserData));
            reset(updatedUserData);
            if (updatedUserData.image) {
              setImage({
                file: null,
                src: updatedUserData.image || IMAGES.NO_IMAGE,
              });
              setValue("image", updatedUserData.image);
            }
            toast.success("User updated successfully");
          },
        });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImage({
        file,
        src: URL.createObjectURL(file),
      });
      setValue("image", URL.createObjectURL(file));
    }
  };

  return (
    <div className="border rounded-2xl mx-4 mb-4 gap-2 p-6 shadow bg-white">
      <div>
        <h1 className="text-4xl font-bold mb-6 text-gray-700">Profile</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center">
          <div className="md:w-40 md:h-40 w-24 h-24 rounded-full  border shadow relative mt-8">
            <Image
              src={image?.src || IMAGES.NO_IMAGE}
              alt=""
              fill
              className="w-full h-full rounded-full object-cover"
              onClick={() => imageRef.current?.click()}
            />
            {errors.image?.message && (
              <div className="text-red-500 text-sm">
                {errors.image?.message}
              </div>
            )}
            <input
              type="file"
              className="hidden"
              ref={imageRef}
              onChange={handleImageChange}
            />
            <div className="absolute bottom-0 -right-2 -translate-x-1/2 text-black z-10 bg-blue-500 rounded-full ">
              <div className="h-8 w-8 flex items-center justify-center">
                <HiPencil className="h-4 w-4 text-white cursor-pointer" onClick={() => imageRef.current?.click()}
                />
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
            <Button className="w-full mt-6 " type="submit" loading={isLoadingUpdate}>
              Update
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
