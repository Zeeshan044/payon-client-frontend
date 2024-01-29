import React, { useState } from "react";
import Button from "./button";

interface Props {
  items: string[];
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<Props> = ({ items, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(items[0]);

  const handleTabToggle = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex gap-3 p-1 bg-primary/10 rounded-md">
      {items.map((item, index) => (
        <Button
          key={item}
          onClick={() => handleTabToggle(item)}
          className={`duration-100 ${
            activeTab === item ? "" : "bg-slate-300 !text-gray-700"
          }`}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
