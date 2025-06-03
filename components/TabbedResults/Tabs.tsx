import React from "react";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex md:flex-col overflow-x-auto md:overflow-y-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`py-2 px-4 whitespace-nowrap text-sm border-b-2 md:border-b-0 md:border-l-4 
            ${
              tab === activeTab
                ? "border-blue-500 text-blue-600 font-semibold"
                : "border-transparent text-gray-600"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
