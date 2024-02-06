import React, { useState } from "react";
import Layout from "@/components/layout/layout";
import StatCard from "@/components/ui/stat-card";
import StatChart from "@/components/ui/stat-revenue-chart";
import AverageOrdersChart from "@/components/ui/stat-averageOrders-chart";

const Stats: React.FC = () => {
  return (
    <Layout>
      <div className="m-4">
        <h2 className=" my-3 text-4xl font-bold">Today</h2>
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 ">
          <StatCard title="Revenue" value="0" />
          <StatCard title="Orders" value="0" />
          <StatCard title="Average Order" value="0" />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatChart title="Revenue" />
          <AverageOrdersChart title=" Average Order" />
        </div>
      </div>
    </Layout>
  );
};

export default Stats;
