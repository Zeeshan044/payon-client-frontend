import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export const navbarItems = [
  { to: "/orders", title: "Orders" },
  { to: "/tables", title: "Tables" },
  { to: "/menu", title: "Menu" },
  { to: "/stats", title: "Stats" },
  { to: "/staff", title: "Staff" },
  { to: "/profile", title: "Profile" },

];
const SmallNavbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="">
      <div onClick={handleNav} className="block m-2">
        {nav ? (
          <AiOutlineClose size={30} className="text-white" />
        ) : (
          <AiOutlineMenu size={30} className="text-white" />
        )}
      </div>
      <div
        className={
          nav
            ? "w-screen bg-primary absolute top-14 left-0 flex justify-center text-center backdrop-brightness-0 my-4 backdrop-filter z-50"
            : "absolute left-[-100%]"
        }
      >
        <ul className="my-3">
          {navbarItems.map(({ to, title }) => (
            <li key={title}>
              <Link className="flex flex-col items-center text-white" href={to}>
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SmallNavbar;
