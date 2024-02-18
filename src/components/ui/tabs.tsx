import React, { useState } from "react";

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
    <div className="flex gap-3 p-1">
      {items.map((item, index) => (
        <button
          key={item}
          onClick={() => handleTabToggle(item)}
          className={`px-4 py-2 text-sm font-semibold rounded-md ${
            activeTab === item
              ? "bg-primary text-white "
              : "text-gray-700 bg-white shadow-md"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
