'use client';
import React, { useState } from 'react';
import Tabs from './Tabs';
import StudentResultTable from './StudentResultTable';

const data = {
  SAT: [
    { name: 'Abhishek Sharma', score: 1600, school: 'The International School Bangalore' },
    { name: 'Lakshita Baria', score: 1600, school: 'Lotus Valley International School' },
    // ... more
  ],
  ACT: [
    { name: 'Ritika Sen', score: 34, school: 'Greenwood High' },
    { name: 'Aman Yadav', score: 35, school: 'Delhi Public School' },
    // ... more
  ],
};

type TabKey = keyof typeof data;

const TabbedResults = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('SAT');

  return (
    <div className="px-4 py-8 w-full max-w-screen-xl mx-auto">
      <div className="mb-6">
        <h2 className="text-4xl font-semibold text-zinc-700">AP Results</h2>
        <p className="text-gray-500 text-lg">Unlock your full potential with our structured SAT program.</p>
      </div>

      <Tabs
        tabs={Object.keys(data)}
        activeTab={activeTab}
        onChange={(tab) => setActiveTab(tab as TabKey)}
      />

      <StudentResultTable results={data[activeTab]} />
    </div>
  );
};

export default TabbedResults;
