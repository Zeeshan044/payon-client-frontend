import React from "react";

import {
  LogoutIcon,
  OrdersIcon,
  MenuIcon,
  ProfileIcon,
  BrandLogoFull,
  StatsIcon,
  TeamIcon,
  TablesIcon,
} from "@/components/SvgIcon";

import Link from "next/link";
import SmallNavbar from "./SmallNavbar";
import { useRouter } from "next/router";

export const navbarItems = [
  {
    to: "/orders",
    title: "Orders",
    icon: <OrdersIcon size={45} fill="#fff" />,
  },
  {
    to: "/tables",
    title: "Tables",
    icon: <TablesIcon size={45} fill="#fff" />,
  },
  { to: "/menu", title: "Menu", icon: <MenuIcon size={45} fill="#fff" /> },
  { to: "/stats", title: "Stats", icon: <StatsIcon size={45} fill="#fff" /> },
  { to: "/staff", title: "Staff", icon: <TeamIcon size={45} fill="#fff" /> },
  {
    to: "/profile",
    title: "Profile",
    icon: <ProfileIcon size={45} fill="#fff" />,
  },
];

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = (className) => {
  const router = useRouter();

  const isActiveRoute = (route: string) => {
    return router.pathname === route;
  };

  return (
    <div className=" bg-primary md:h-screen md:px-4 py-2 flex md:flex-col justify-between gap-10 overflow-y-auto  ">
      <div className="">
        <div className="">
          <BrandLogoFull className="w-12 md:w-16" />
          <hr className="md:mt-2 md:mb-4" />
        </div>
        <nav>
          <ul className="md:flex md:flex-col md:gap-2 hidden">
            {navbarItems.map(({ to, title, icon }) => (
              <li
                key={title}
                className={isActiveRoute(to) ? "bg-white/25 rounded-lg" : ""}
              >
                <Link
                  className="flex flex-col items-center text-white"
                  href={to}
                >
                  <div>{icon}</div>
                  <span className="block">{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="md:flex md:justify-center hidden">
        <LogoutIcon fill="#fff" />
      </div>
      <div className="md:hidden">
        <SmallNavbar />
      </div>
    </div>
  );
};

export default Navbar;
