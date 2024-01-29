import React from "react";

interface Props {
  title: string;
  value: string;
}

const StatCard: React.FC<Props> = ({ title, value }) => {
  return (
    <div className="w-full">
      <div className="flex items-center p-8 justify-between bg-slate-100 rounded-lg font-bold text-xl">
        <h3>{title}</h3>
        <span>0,00 $ CA</span>
      </div>
    </div>
  );
};

export default StatCard;
