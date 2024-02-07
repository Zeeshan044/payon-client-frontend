import React from "react";
import Input from "@/components/ui/input";
import { HiPencil } from "react-icons/hi2";
import Button from "../ui/button";
import Image from "next/image";
import IMAGES from "@/constants/images";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserProfileFormSchema } from "@/schema/userProfile-form.schema";
import { ModalContent, ModalFooter } from "../ui/modal";

const ViewRestaurant = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(UserProfileFormSchema),
    });

    return (
        <form onSubmit={() => { }}>
            <ModalContent>
                <div className="max-w-2xl mx-auto">
                    <div className="aspect-video relative shadow-lg rounded-md border">
                        <Image
                            src={IMAGES.NO_IMAGE}
                            alt=""
                            className="w-full h-full object-cover rounded-md"
                        />
                        <div className="absolute -bottom-3 right-5 -translate-x-1/2 text-black z-10 bg-primary rounded-full ">
                            <div className="h-8 w-8 flex items-center justify-center">
                                <HiPencil className="h-4 w-4 text-white" />
                            </div>
                        </div>
                        <div className="md:w-40 md:h-40 w-24 h-24 rounded-full absolute -bottom-12 md:-bottom-20 left-1/2 -translate-x-1/2 border shadow">
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
                            {...register("description")}
                            id="description"
                            name="description"
                            placeholder="description"
                            label="Description"
                            error={errors.description?.message}
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
                    </div>
                </div>
            </ModalContent>
            <ModalFooter>
                <Button className="w-full" type="submit">
                    Update Resturant
                </Button>
            </ModalFooter>
        </form>
    );
};

export default ViewRestaurant;
