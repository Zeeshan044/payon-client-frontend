import React from "react";
import Navbar from "@/components/layout/navbar/navbar";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="md:h-screen md:flex justify-between">
      <Navbar />
      <div className="grow overflow-y-auto">
        <div className="max-w-screen-xl mx-auto py-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
