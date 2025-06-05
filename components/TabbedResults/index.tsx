"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import StudentResultTable from "./StudentResultTable";
import { apResultsData, TabKey } from "@/data/apResultsData";

const TabbedResults = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("AP Statistics");

  return (
    <div className="px-4 py-8 w-full max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        {/* Use custom color class from Tailwind config */}
        <h2 className="text-4xl font-semibold text-primaryHeader">AP Results</h2>  
        <p className="text-secondary text-lg">
          Unlock your full potential with our structured SAT program.
        </p>
      </div>

      {/* Layout: Tabs Left (desktop) / Top (mobile) */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Tabs */}
        <div className="md:w-1/4 w-full md:sticky md:top-24 z-10">
          <div className="overflow-y-auto max-h-[300px] md:max-h-[calc(100vh-8rem)] md:h-[calc(100vh-8rem)] border border-muted md:border-r md:rounded-none rounded-lg">
            <Tabs
              tabs={Object.keys(apResultsData)}
              activeTab={activeTab}
              onChange={(tab) => setActiveTab(tab as TabKey)}
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/4 w-full overflow-y-auto">
          <div className="md:max-h-[calc(100vh-8rem)] overflow-y-auto">
            <StudentResultTable results={apResultsData[activeTab]} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default TabbedResults;
