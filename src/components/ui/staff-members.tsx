import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaCalendar,
  FaClock,
} from "react-icons/fa";
import Image from "next/image";
import IMAGES from "@/constants/images";
import Button from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";
import BreadCrumb from "./bredcrumb";

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
      name: "Jane Doe",
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
    dispatch(openModal({ view: "ADD_STAFF", data: { title: "Add Staff" } }));
  };

  const handleDeleteStaff = () => {};

  return (
    <div className="mx-4 mt-10">
      <div className="flex justify-between mb-2 items-center">
        <h1 className="text-2xl font-semibold lg:text-3xl lg:font-bold">
          Staff Members
        </h1>
        <Button size="md" className="" onClick={handleAddStaff}>
          Add Staff
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {staffMembers.map((staff) => (
          <div key={staff.id} className="bg-slate-100 p-4 rounded-md shadow-md">
            <div className="flex items-center mb-4 justify-between">
              <Image
                src={IMAGES.NO_IMAGE}
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
              {/* <div className="text-green-500 font-bold">{staff.isActive ? "Active" : "Not Active"}</div> */}
            </div>
            <h2 className="text-lg font-bold">{staff.name}</h2>
            <p className="text-gray-500">{staff.role}</p>
            <div className="flex items-center mt-2">
              <FaEnvelope className="mr-2" />
              <p>{staff.email}</p>
            </div>
            <div className="flex items-center mt-2">
              <FaPhone className="mr-2" />
              <p>{staff.phone}</p>
            </div>
            <div className="flex items-center mt-2">
              <FaBuilding className="mr-2" />
              <p>{staff.restaurant}</p>
            </div>
            <div className="flex items-center mt-2">
              <FaCalendar className="mr-2" />
              <p>{staff.startDate}</p>
            </div>
            <div className="flex items-center mt-2">
              <FaClock className="mr-2" />
              <p>{staff.workingHours}</p>
            </div>
            <div className="flex items-center mt-2">
              <FaCalendar className="mr-2" />
              <p>Days Off: {staff.daysOff.join(", ")}</p>
            </div>
            <div className="flex justify-between mt-4 items-center">
              <Button
                className="text-blue-500"
                onClick={() => handleEditStaff()}
              >
                Edit
              </Button>
              <Button
                className="!bg-red-400"
                onClick={() => handleDeleteStaff()}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffMembers;
