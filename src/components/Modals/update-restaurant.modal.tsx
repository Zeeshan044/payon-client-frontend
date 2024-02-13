import React, { useEffect, useState } from "react";
import Input from "@/components/ui/input";
import { HiPencil } from "react-icons/hi2";
import Button from "../ui/button";
import Image from "next/image";
import IMAGES from "@/constants/images";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalContent, ModalFooter } from "../ui/modal";
import { useUpdateRestaurantMutation } from "@/services/data/restaurant.data";
import { RestaurantFormSchema, RestaurantFormValues } from "@/schema/restaurant-from.schema";
import { setSelectedrestaurant } from "@/features/restaurant/restaurantSlice";
import { closeModal } from "@/features/modal/modalSlice";
import { useDispatch } from "react-redux";
interface Props {
    defaultValues?: RestaurantFormValues;
}

const UpdateRestaurant = ({ defaultValues }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm({
        resolver: yupResolver(RestaurantFormSchema),
        defaultValues: defaultValues,
    });

    const [imageInfo, setImageInfo] = useState({
        file: null as File | null,
        src: defaultValues?.cover_image && defaultValues?.profile_image || "",
    });
    const fileRef = React.useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const { mutate: updateRestaurant, isLoading } = useUpdateRestaurantMutation();

    const onSubmit = (data: RestaurantFormValues) => {
        const { name, branch, email, phone, address, description } = data;
        const formData = new FormData();
        if (imageInfo.file) {
            formData.append("cover_image", imageInfo.file);
            formData.append("profile_image", imageInfo.file);
        }
        formData.append("name", name);
        formData.append("branch", branch);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("address", address);
        formData.append("description", description);
        if (imageInfo.file) {
            formData.append("image", imageInfo.file);
        }
        if (defaultValues) {
            updateRestaurant(
                //@ts-ignore
                { restaurantId: defaultValues.id, data: formData },
                {
                    onSuccess() {
                        reset();
                        setImageInfo({ file: null, src: "" });
                        dispatch(setSelectedrestaurant(null));
                        dispatch(closeModal());
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
                    <div className="mt-24">
                        <Input
                            {...register("name")}
                            id="name"
                            name="name"
                            placeholder="Name"
                            label="Name"
                            error={errors.name?.message}
                        />
                        <Input
                            {...register("branch")}
                            id="branch"
                            name="branch"
                            placeholder="Branch"
                            label="Branch"
                            error={errors.branch?.message}
                        />
                        <Input
                            {...register("email")}
                            id="email"
                            name="email"
                            placeholder="Email"
                            label="Email"
                            error={errors.email?.message}
                        />
                        <Input
                            {...register("phone")}
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            label="Phone"
                            error={errors.phone?.message}
                        />
                        <Input
                            {...register("address")}
                            id="address"
                            name="address"
                            placeholder="Address"
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
                <Button className="w-full" type="submit" loading={isLoading}>
                    Update Restaurant
                </Button>
            </ModalFooter>

        </form>
    );
};

export default UpdateRestaurant;
