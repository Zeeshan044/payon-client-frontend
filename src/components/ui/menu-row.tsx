import IMAGES from "@/constants/images";
import { convertToUSD } from "@/utils";
import Image from "next/image";
import React from "react";
import { HiTrash, HiPencil } from "react-icons/hi2";

interface Props {
  title?: string;
  description?: string;
  price?: number;
  image?: string;
  onClick?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
  AddonName?: string;
  AddonPrice?: number

}

const MenuRow = ({
  title,
  description,
  price,
  image,
  onClick,
  onDelete,
  onEdit,
  AddonName,
  AddonPrice
}: Props) => {
  return (
    <div>

      <div
        onClick={onClick}
        className="flex items-center justify-between bg-white p-2 mb-3 rounded-md shadow"
      >
        <div className="flex flex-col self-stretch">
          <h3 className="font-bold">{title}</h3>
          <div>
            <p className="text-sm line-clamp-2">{description}</p>
          </div>
          {price && (
            <span className="text-primary font-bold">{convertToUSD(price)}</span>
          )}
          {AddonName && (
            <span className="text-primary font-bold">{AddonName}</span>
          )}
        </div>
        <div className="flex gap-3">
          <div className="aspect-[4/3] w-24 rounded bg-primary/50 overflow-hidden relative shadow">
            <img
              // fill
              src={image || IMAGES.NO_IMAGE}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-around">
            <HiTrash
              className="text-red-500 h-5 w-5 cursor-pointer"
              onClick={onDelete}
            />
            <HiPencil
              className="text-blue-500 h-5 w-5 cursor-pointer"
              onClick={onEdit}
            />
          </div>
          {AddonPrice && (
            <span className="text-primary font-bold">{convertToUSD(AddonPrice)}</span>
          )}
        </div>
      </div>
    </div>

  );
};

export default MenuRow;
