import { LogoutIcon, MenuIcon, OrdersIcon, ProfileIcon, StatsIcon, TablesIcon, TeamIcon } from "@/components/SvgIcon";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export const navbarItems = [
  {
    to: "/orders", title: "Orders", icon: <OrdersIcon size={20} fill="#fff" />,
  },
  {
    to: "/tables", title: "Tables", icon: <TablesIcon size={20} fill="#fff" />,
  },
  {
    to: "/menu", title: "Menu", icon: <MenuIcon size={20} fill="#fff" />,
  },
  {
    to: "/stats", title: "Stats", icon: <StatsIcon size={20} fill="#fff" />,
  },
  {
    to: "/staff", title: "Staff", icon: <TeamIcon size={20} fill="#fff" />,
  },
  {
    to: "/profile", title: "Profile", icon: <ProfileIcon size={20} fill="#fff" />,
  },
  {
    to: "/login", title: "Logout", icon: <LogoutIcon size={20} fill="#fff" />
  }

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
            ? "w-screen bg-primary absolute top-14 left-0 flex justify-center text-center backdrop-brightness-50 my-2 backdrop-filter z-50"
            : "absolute left-[-100%]"
        }
      >
        <ul className="my-3">
          {navbarItems.map(({ to, title, icon }) => (
            <li key={title}>
              <Link className="flex flex-col text-white" href={to}>
                <div className="flex items-center gap-2 my-1">
                  <span>{icon}</span>
                  <span >{title}</span>
                </div>

              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SmallNavbar;
