import React, { useState, useEffect, useRef } from "react";
import { convertToUSD } from "@/utils";
import Image from "next/image";
import { HiTrash, HiPencil } from "react-icons/hi2";
import edit from "@/assets/images/edit.svg";
import Delete from "@/assets/images/delete.svg";
import Toggle from "@/assets/images/threeDots.svg";
import DropdownMenu from "./dropdown";

interface Props {
  title?: string;
  description?: string;
  ingredients?: string;
  price?: number;
  image?: string;
  onClick?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
  AddonName?: string;
  AddonPrice?: number;
}

const MenuRow = ({
  title,
  description,
  ingredients,
  price,
  image,
  onClick,
  onDelete,
  onEdit,
  AddonName,
  AddonPrice,
}: Props) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleClick = () => {
    setOpenDropdown((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpenDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div
        className="flex items-center justify-between bg-white py-2 px-4 border cursor-pointer rounded-md shadow"
      >
        <h3 className="text-base font-normal">{title}</h3>
        <div className="flex gap-3">
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => handleToggleClick()}>
              <Image src={Toggle} alt="toggle" />
            </button>
            {openDropdown && (
              <DropdownMenu isOpen={openDropdown} onEdit={onEdit} onDelete={onDelete} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuRow;
