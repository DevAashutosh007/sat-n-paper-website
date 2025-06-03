import React from 'react';

type Props = {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
};

const Tabs: React.FC<Props> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === tab
              ? 'bg-zinc-800 text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
