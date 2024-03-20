import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaCalendar,
  FaClock,
} from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

import Image from "next/image";
import IMAGES from "@/constants/images";
import EmailImg from "@/assets/images/email.svg"
import CalenderImg from "@/assets/images/calender.svg"
import PhoneImg from "@/assets/images/phone.svg"
import RestaurantImg from "@/assets/images/restaurant.svg"
import TimeImg from "@/assets/images/time.svg"
import Add from "@/assets/images/add.svg"
import edit from "@/assets/images/edit.svg"
import Delete from "@/assets/images/delete.svg"

import Button from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";
// import BreadCrumb from "./bredcrumb";

const StaffMembers = () => {
  const staffMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder",
      email: "john@example.com",
      phone: "123-456-7890",
      restaurant: "XYZ Restaurant",
      startDate: "2022-01-01",
      workingHours: "9 AM - 5 PM",
      daysOff: ["Saturday", "Sunday"],
      isActive: true,
    },
    {
      id: 2,
      name: "Cameron Williamson",
      role: "Co-Founder",
      email: "jane@example.com",
      phone: "987-654-3210",
      restaurant: "XYZ Restaurant",
      startDate: "2022-01-01",
      workingHours: "9 AM - 5 PM",
      daysOff: ["Saturday", "Sunday"],
      isActive: false,
    },
    {
      id: 3,
      name: "Alice Smith",
      role: "Chef",
      email: "alice@example.com",
      phone: "555-555-5555",
      restaurant: "XYZ Restaurant",
      startDate: "2022-01-01",
      workingHours: "9 AM - 5 PM",
      daysOff: ["Saturday", "Sunday"],
      isActive: true,
    },

  ];
  const dispatch = useDispatch();
  const handleAddStaff = () => {
    dispatch(openModal({ view: "ADD_STAFF", data: { title: "Add Staff" } }));
  };

  const handleEditStaff = () => {
    dispatch(openModal({ view: "UPDATE_STAFF", data: { title: "Update Staff" } }));
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDeleteStaff = () => {
    dispatch(openModal({ view: "DELETE_STAFF", data: { title: "Delete Staff" } }));

  };

  return (
    <div className="mx-4 mt-10">
      <div className="flex justify-between  items-center border-b pb-5 mb-10">
        <h1 className="text-2xl font-semibold lg:text-3xl lg:font-bold">
          Staff Members
        </h1>
        <div onClick={handleAddStaff} className=" flex gap-2 py-3 pl-3 pr-5 cursor-pointer items-center rounded-md bg-gradient-to-r from-[#5271FF] to-[#40AFFF] ">
          {/* <Image src={Add} alt="add" /> */}
          <IoMdAddCircleOutline className=" text-[#F0F0F0] h-6 w-6" />

          <a className=" text-xl text-[#F0F0F0]" >
            Add Staff
          </a>
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-[100px]">
        {staffMembers.map((staff) => (
          <div key={staff.id} className=" p-4 rounded-xl bg-white filter drop-shadow-md">
            <div className="flex mb-4 justify-between ">
              <Image
                src={IMAGES.NO_IMAGE}
                alt=""
                className="w-20 h-20 rounded-full object-cover border-2"
              />
              <div onClick={handleToggleModal}>
                <BsThreeDots className=" mt-3 w-5 cursor-pointer" />
                {isModalOpen && (
                  <div className=" fixed right-0 drop-shadow-md left-44 top-12 bg-opacity-50 flex  justify-center font-medium text-xs">
                    <div className="bg-white rounded-lg py-4">
                      <div onClick={() => handleEditStaff()} className="flex gap-2 mb-2 px-1 cursor-pointer">
                        <Image src={edit} alt="" />
                        <a className="text-[#202020]">Edit</a>
                      </div>
                      <hr className=" w-full" />
                      <div onClick={() => handleDeleteStaff()} className="flex gap-2 mt-2 pl-1 pr-8 cursor-pointer">
                        <Image src={Delete} alt="" />
                        <a className="text-[#202020]">Delete</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
            <h2 className="font-medium text-base">{staff.name}</h2>
            <p className="text-gray-400 text-sm">{staff.role}</p>
            <div className=" bg-[#5271FF14] py-3 px-3 mt-3 rounded-xl text-sm font-normal drop-shadow-md">
              <div className="flex items-center mt-3 gap-2">
                {/* <FaEnvelope className="" /> */}
                <Image src={EmailImg} alt="" />
                <p>{staff.email}</p>
              </div>
              <div className="flex items-center mt-3 gap-2">
                <Image src={PhoneImg} alt="" />
                <p>{staff.phone}</p>
              </div>
              <div className="flex items-center mt-3 gap-2">
                <Image src={RestaurantImg} alt="" />
                <p>{staff.restaurant}</p>
              </div>
              <div className="flex items-center mt-3 gap-2">
                <Image src={CalenderImg} alt="" />
                <p>{staff.startDate}</p>
              </div>
              <div className="flex items-center mt-3 gap-2">
                <Image src={TimeImg} alt="" />
                <p>{staff.workingHours}</p>
              </div>
              <div className="flex items-center mt-3 gap-2">
                <Image src={CalenderImg} alt="" />
                <p>Days Off: {staff.daysOff.join(", ")}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffMembers;
