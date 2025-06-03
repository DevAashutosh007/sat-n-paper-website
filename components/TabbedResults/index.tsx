"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import StudentResultTable from "./StudentResultTable";

 
 
type TabKey = "AP Statistics" | "AP Calculus BC" | "AP Calculus AB" | "AP Precalculus" | "AP Psychology" | "AP Computer Science A" | "AP Physics C Mechanics" | "AP Physics 1" | "AP Physics C Electricity & Magnetism" | "AP Microeconomics" | "AP Macroeconomics" | "AP Environmental Science" | "AP Human Geography" | "AP US History" | "AP World History" | "AP Biology" | "AP Comparative Government and Politics";

const data: Record<TabKey, { name: string; score: number; school: string }[]> =
  {
    "AP Statistics": [
      {
        name: "Abhishek Sharma",
        score: 1600,
        school: "The International School Bangalore",
      },
      {
        name: "Lakshita Baria",
        score: 1600,
        school: "Lotus Valley International School",
      },
      // ...
    ],
    "AP Calculus BC": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP Calculus AB": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP Precalculus": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP Psychology": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP Computer Science A": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP Physics C Mechanics": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP Physics 1": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP Physics C Electricity & Magnetism": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP Microeconomics": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP Macroeconomics": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP Environmental Science": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP Human Geography": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP US History": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP World History": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP Biology": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
    "AP Comparative Government and Politics": [
      { name: "Ritika Sen", score: 34, school: "Greenwood High" },
      { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
      // ...
    ],
  };

const TabbedResults = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("AP Statistics");

  return (
    <div className="px-4 py-8 w-full max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-4xl font-semibold text-zinc-700">AP Results</h2>
        <p className="text-gray-500 text-lg">
          Unlock your full potential with our structured SAT program.
        </p>
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
