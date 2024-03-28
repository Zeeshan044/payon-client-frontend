import React from "react";
import Image from "next/image";
import edit from "@/assets/images/edit.svg";
import Delete from "@/assets/images/delete.svg";
const DropdownMenu = ({ isOpen, onEdit, onDelete }) => {
    return isOpen ? (
        <div className="absolute right-4 top-0 w-28 bg-gray-100 rounded-lg shadow-lg">
            <ul>
                <li
                    onClick={onEdit}
                    className="py-2 px-4 cursor-pointer flex items-center hover:bg-gray-200"
                >
                    <Image src={edit} alt="" />
                    <span className="ml-2">Edit</span>
                </li>
                <li
                    onClick={onDelete}
                    className="py-2 px-4 cursor-pointer flex items-center hover:bg-gray-200"
                >
                    <Image src={Delete} alt="" />
                    <span className="ml-2">Delete</span>
                </li>
            </ul>
        </div>
    ) : null;
};


export default DropdownMenu;
