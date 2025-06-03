'use client';
import React, { useState } from 'react';
import Tabs from './Tabs';
import StudentResultTable from './StudentResultTable';

type TabKey = 'SAT' | 'ACT';

const data: Record<TabKey, { name: string; score: number; school: string }[]> = {
  SAT: [
    { name: 'Abhishek Sharma', score: 1600, school: 'The International School Bangalore' },
    { name: 'Lakshita Baria', score: 1600, school: 'Lotus Valley International School' },
    // ...
  ],
  ACT: [
    { name: 'Ritika Sen', score: 34, school: 'Greenwood High' },
    { name: 'Aman Yadav', score: 35, school: 'Delhi Public School' },
    // ...
  ],
};

const TabbedResults = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('SAT');

  return (
    <div className="px-4 py-8 w-full max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-4xl font-semibold text-zinc-700">AP Results</h2>
        <p className="text-gray-500 text-lg">Unlock your full potential with our structured SAT program.</p>
      </div>

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row gap-4 h-[600px]">
        {/* Tabs section */}
        <div className="md:w-1/4 w-full md:sticky top-24">
          <div className="overflow-y-auto max-h-[500px] md:max-h-full md:h-full border md:border-r rounded-lg md:rounded-none">
            <Tabs
              tabs={Object.keys(data)}
              activeTab={activeTab}
              onChange={(tab) => setActiveTab(tab as TabKey)}
            />
          </div>
        </div>

        {/* Content section */}
        <div className="md:w-3/4 w-full overflow-y-auto max-h-[500px] md:max-h-full md:h-full">
          <StudentResultTable results={data[activeTab]} />
        </div>
      </div>
    </div>
  );
};

export default TabbedResults;
