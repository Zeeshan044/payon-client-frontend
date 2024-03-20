import React from "react";
import { ModalContent, ModalFooter } from "../ui/modal";
import Input from "../ui/input";
import Button from "../ui/button";
import upload from "@/assets/images/image.svg"
import Image from "next/image";
import FormInput from "../ui/form-input";

const AddStaff = () => {
    return (
        <form action="#" method="post" className=" text-base font-medium">
            <ModalContent >
                <p>Staff Image</p>
                <div className=" bg-slate-100 gap-1 w-16 h-16 flex flex-col items-center justify-center rounded">
                    <Image src={upload} alt="picture" className=" w-6" />
                    <p className=" text-xs underline text-blue-400">Upload</p>
                </div>
                <div className=" mt-6">
                    <p >Staff Information</p>
                    <div className=" grid md:grid-cols-2 gap-x-6 mt-3">
                        <FormInput name="name" label="Name" id="name" placeholder="John Smith" />
                        {/* <label htmlFor=" mt-2">Select Role:</label>
                    <select className="block w-full px-3 py-2 rounded-md border-2 bg-slate-200 text-black placeholder-black/60 focus:outline-none focus:border-black">
                        <option value="Founder">Founder</option>
                        <option value="Co-Founder">Co-Founder</option>
                        <option value="Chef">Chef</option>
                        <option value="Waiter">Waiter</option>
                        <option value="Manager">Manager</option>
                    </select> */}
                        <FormInput name="email" label="Email" id="email" placeholder="  johnsmith@gmail.com " />
                        <FormInput name="phone" label="Phone" id="phone" placeholder=" +92 300 7505059" />
                        <FormInput name="restaurant" label="Restaurant" id="restaurant" placeholder=" XYZ, Restaurant" />
                        {/* <FormInput name="startDate" label="Start Date" id="startDate" type="date" /> */}
                        <FormInput name="workingHours" label="Working Hours" id="workingHours" placeholder=" 09:00 AM - 05:00 PM" />
                        <FormInput name="daysOff" label="Off Days" id="daysOff" placeholder=" Saturday & Sunday" />
                    </div>
                </div>

            </ModalContent>
            <ModalFooter>
                <Button className="flex justify-end px-10 bg-gradient-to-r from-[#5271FF] to-[#40AFFF]" type="submit">Add Staff</Button>
            </ModalFooter>
        </form>
    );
};

export default AddStaff;
