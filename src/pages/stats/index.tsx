import React, { useState } from "react";
import Layout from "@/components/layout/layout";
import StatCard from "@/components/ui/stat-card";
import StatChart from "@/components/ui/stat-revenue-chart";
import AverageOrdersChart from "@/components/ui/stat-averageOrders-chart";
import DoughnutChart from "@/components/ui/dougnout-chart";
import StaffMemberCard from "@/components/ui/latest-orderCard";
import OrderDashboardCard from "@/components/ui/orderDashboardCard";
import { Heading } from "@/components/ui/heading";

const Stats: React.FC = () => {
  return (
    <Layout>
      <div className="m-4">
        <Heading title="Stats" />
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2  ">
          <StatCard title="Revenue" value="0" />
          <StatCard title="Orders" value="0" />
          <StatCard title="Average Order" value="0" />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mt-10">
          <AverageOrdersChart title=" Average Order" />
          <DoughnutChart />
          <StatChart title="Revenue" />
          <StaffMemberCard />
          <OrderDashboardCard />
        </div>
      </div>
    </Layout>
  );
};

export default Stats;
