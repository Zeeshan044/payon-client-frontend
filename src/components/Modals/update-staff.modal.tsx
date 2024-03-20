import React from "react";
import { ModalContent, ModalFooter } from "../ui/modal";
import Button from "../ui/button";
import Image from "next/image";
import FormInput from "../ui/form-input";
import Profile from "@/assets/images/profile.svg"
import { useDispatch } from "react-redux";
import { closeModal } from "@/features/modal/modalSlice";
import { FaPen } from "react-icons/fa";


const UpdateStaff = () => {
    const dispatch = useDispatch();

    return (
        <form action="#" method="post" className=" text-base font-medium">
            <ModalContent >
                <p>Staff Image</p>
                <div className=" bg-slate-100 gap-1 w-16 h-16 flex flex-col items-center justify-center rounded relative">
                    {/* <Image src={upload} alt="picture" className=" -top-1 -right-0 absolute" /> */}
                    <div className=" rounded-full  -top-1 -right-0 absolute bg-blue-600 p-1">
                        <FaPen className=" w-2 h-2 text-white" />
                    </div>
                    <Image src={Profile} alt="picture" className=" " />
                </div>
                <div className=" mt-6">
                    <p >Staff Information</p>
                    <div className=" grid md:grid-cols-2 gap-x-6 mt-3">
                        <FormInput name="name" label="Name" id="name" placeholder="John Smith" />
                        <FormInput name="email" label="Email" id="email" placeholder="  johnsmith@gmail.com " />
                        <FormInput name="phone" label="Phone" id="phone" placeholder=" +92 300 7505059" />
                        <FormInput name="restaurant" label="Restaurant" id="restaurant" placeholder=" XYZ, Restaurant" />
                        <FormInput name="workingHours" label="Working Hours" id="workingHours" placeholder=" 09:00 AM - 05:00 PM" />
                        <FormInput name="daysOff" label="Off Days" id="daysOff" placeholder=" Saturday & Sunday" />
                    </div>
                </div>
            </ModalContent>
            <ModalFooter>
                <div className="flex justify-end items-end gap-3">
                    <Button onClick={() => dispatch(closeModal())}
 variant="cancel" className=" w-[146px]" type="submit">Cancel</Button>
                    <Button className="flex w-[146px] bg-gradient-to-r from-[#5271FF] to-[#40AFFF]" type="submit">Update Staff</Button>
                </div>

            </ModalFooter>
        </form>
    );
};

export default UpdateStaff;
