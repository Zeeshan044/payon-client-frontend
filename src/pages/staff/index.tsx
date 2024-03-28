import React from "react";
import Layout from "@/components/layout/layout";
import StaffMembers from "@/components/ui/staff-members";

const Staff = () => {
  return (
    <Layout>
      <div className="container mx-auto my-4">
        <StaffMembers />
      </div>
    </Layout>
  );
};

export default Staff;
