import React, { useState } from "react";
import Layout from "@/components/layout/layout";
import StatCard from "@/components/ui/stat-card";
import StatChart from "@/components/ui/stat-revenue-chart";
import AverageOrdersChart from "@/components/ui/stat-orderSummary-chart";
import DoughnutChart from "@/components/ui/dougnout-chart";
import StaffMemberCard from "@/components/ui/latest-orderCard";
import OrderDashboardCard from "@/components/ui/orderDashboardCard";
import { Heading } from "@/components/ui/heading";
import OrderSummary from "@/components/ui/stat-orderSummary-chart";

const Stats: React.FC = () => {
  return (
    <Layout>
      <div className="lg:mx-16 mx-8 my-4">
        <Heading title="Statistics" />
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 mt-12 lg:mx-16 mx-3  ">
          <StatCard title="Total Revenue" value="$ 87,561" />
          <StatCard title="Total Orders" value="12" />
          <StatCard title="Average Order" value="04" />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* <AverageOrdersChart title=" Average Order" /> */}
          <OrderSummary />
          {/* <DoughnutChart /> */}
          <StatChart title="Revenue" />
          {/* <StaffMemberCard />
          <OrderDashboardCard /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Stats;
