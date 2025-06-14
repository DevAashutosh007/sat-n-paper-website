"use client";

import React from "react";
import { Info } from "lucide-react";
import Tooltip from "./ui/Tooltip";

interface Student {
  name: string;
  score: number;
  city?: string;
  school: string;
}

interface PerformerGroup {
  title: string;
  tooltip?: string;
  students: Student[];
}

interface TopPerformersProps {
  data: PerformerGroup[];
}

const TopPerformers: React.FC<TopPerformersProps> = ({ data }) => {
  return (
    <div className="w-full px-4 py-8 bg-background shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold text-center mb-6 text-link">
        Top Performers
      </h2>

      {data.map((group, idx) => (
        <div key={idx} className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-medium text-link">{group.title}</h3>
            {group.tooltip && (
              <Tooltip content={group.tooltip}>
                <Info className="w-5 h-5 text-secondary cursor-pointer" />
              </Tooltip>
            )}
          </div>

          <div className="w-full flex flex-col gap-3">
            {group.students.map((student, sIdx) => (
              <div
                key={sIdx}
                className="flex justify-between items-center bg-background rounded-xl px-4 py-2 shadow border-border"
              >
                {/* Left: Name and School */}
                <div className="w-3/4 flex flex-col gap-1">
                  <div className="text-base font-medium text-link leading-snug">
                    {student.name}
                  </div>
                  <div className="text-sm text-performer-subtext truncate leading-tight">
                    {student.school}
                  </div>
                </div>

                {/* Right: Score and City */}
                <div className="flex flex-col items-end gap-1 text-right">
                  <div className="text-base font-semibold text-performer-score leading-snug">
                    {student.score}
                  </div>
                  {student.city && (
                    <div className="text-sm text-performer-subtext leading-tight">
                      {student.city}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopPerformers;
