import React, { useState, useEffect, useRef } from "react";
import DropdownMenu from "./dropdown";
import Toggle from "@/assets/images/threeDots.svg";
import Image from "next/image";
import IMAGES from "@/constants/images";
import { IProduct, Category } from "@/types/api";
import { Addon, Allergens } from "@/types";
import { useClickAway } from "@react-aria/interactions";


interface ProductRowProps {
    product: IProduct;
    onDelete: (id: number) => void;
    onEdit: (product: IProduct) => void;
    category: Category;
    addons: Addon[];
    allergens: Allergens[];
}

const ProductRow: React.FC<ProductRowProps> = ({ product, onDelete, onEdit, category, addons, allergens }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleToggleClick = () => {
        setOpenDropdown((prev) => !prev);
    };

    // useClickAway({
    //     ref: dropdownRef,
    //     onClickAway: () => setOpenDropdown(false),
    // });
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
        <div className="rounded-2xl border bg-white border-menuBorder ">
            <div className=" flex mt-2">
                <div className=" relative left-48" ref={dropdownRef}>
                    <button onClick={handleToggleClick}>
                        <Image src={Toggle} alt="toggle" />
                    </button>
                    {openDropdown && (
                        <DropdownMenu
                            isOpen={openDropdown}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    )}
                </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 text-fadeDark pb-6 px-12">
                <img
                    src={product?.image || IMAGES.NO_IMAGE}
                    alt={product.name}
                    className="rounded-full w-16 h-16"
                />
                <h4 className="text-xl font-semibold">{product.name}</h4>
                <p className="text-primary text-base font-normal">{category.name}</p>
                <p className="text-lg font-semibold">$ {product.price}</p>
                {/* {addons.map((addon) => (
                    <p key={addon.id} className="text-lg font-semibold">Addons :{addon.name}</p>
                ))}
                {allergens.map((allergen) => (
                    <p key={allergen.id} className="text-lg font-semibold">Allergens: {allergen.name}</p>
                ))} */}
            </div>
        </div>
    );
};

export default ProductRow;
