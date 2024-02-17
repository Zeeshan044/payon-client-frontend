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
import { IoPencilSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

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
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-white uppercase bg-primary">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              Role
            </th>
            <th scope="col" className="py-3 px-6">
              Date
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              Company
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {staffMembers.map((item, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="py-4 px-6">{item.name}</td>
              <td className="py-4 px-6">{item.email}</td>
              <td className="py-4 px-6">{item.role}</td>
              <td className="py-4 px-6">{item.startDate}</td>
              <td className="py-4 px-6">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.isActive === true
                      ? "bg-green-100 text-green-800"
                      : item.isActive === false
                  }`}
                >
                  {item.isActive ? "active" : "inactive"}
                </span>
              </td>
              <td className="py-4 px-6">{item.restaurant}</td>
              <td className="py-4 px-6 flex">
                <Button
                  variant="secondary"
                  onClick={handleEditStaff}
                  className="mr-2"
                >
                  <IoPencilSharp />
                </Button>
                <Button
                  variant="danger"
                  onClick={handleDeleteStaff}
                  className="mr-2"
                >
                  <MdDelete />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffMembers;
