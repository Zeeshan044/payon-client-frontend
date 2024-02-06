import React from "react";
import Button from "../ui/button";
import Image from "next/image";
import IMAGES from "@/constants/images";
import { openModal } from "@/features/modal/modalSlice";
import { useDispatch } from "react-redux";

const UserRestaurants = () => {
    const dispatch = useDispatch();

    const handleViewMore = () => {
        dispatch(openModal({ view: "VIEW_RESTURANT", data: { title: "Restaurant Details" } }));
    };

    return (
        <div className="lg:mr-10 lg:mt-32 m-10">
            <div>
                <h1 className="text-3xl font-bold">Restaurants</h1>
                <div className="border-2 bg-slate-100 rounded-md shadow flex flex-col md:flex-row items-center justify-between max-w-2xl p-2 md:my-5">
                    <div className="mb-4 md:mr-4">
                        <Image
                            src={IMAGES.NO_IMAGE}
                            alt=""
                            className="w-20 h-20 rounded-full object-cover"
                        />
                        <h2 className="font-bold text-xl mt-2 md:text-right">cheezious</h2>
                    </div>
                    <div className="flex flex-col items-end flex-wrap">
                        <div>
                            <p>Lorem ipsum, dolor sit amet consectetur .....</p>
                            <p>New York, USA</p>
                        </div>
                        <div className="mt-5">
                            <Button onClick={handleViewMore}>View More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRestaurants;
