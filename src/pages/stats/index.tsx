import React, { useState } from "react";
import Layout from "@/components/Layout/Layout";
import StatCard from "@/components/ui/stat-card";

const Stats: React.FC = () => {
  return (
    <Layout>
      <div className="m-4">
        <h2 className=" my-3 text-4xl font-bold">Today</h2>
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 ">
          <StatCard loading={true} title="Revenue" value="0" />
          <StatCard loading={true} title="Orders" value="0" />
          <StatCard loading={true} title="Average Order" value="0" />
        </div>
      </div>
    </Layout>
  );
};

export default Stats;
