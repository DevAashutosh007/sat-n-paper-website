import React from "react";
import ProgramBanner from "@/components/CourseProgram/ProgramBanner";
import ProgramInfoGrid from "@/components/CourseProgram/ProgramInfoGrid";
import ProgramOverview from "@/components/CourseProgram/ProgramOverview";
import ProgramSection from "@/components/CourseProgram/ProgramSection";
import PricingCard from "@/components/CourseProgram/PricingCard";

interface CourseProgramProps {
  title: string;
  subtitle: string;
  overview: string;
  infoGrid: { label: string; value: string }[];
  outcomes: string[];
  results: string[];
  pricing: {
    original: number;
    discounted: number;
    discountText: string;
    features: string[];
  };
}


const CourseProgram = ({
  title,
  subtitle,
  overview,
  infoGrid,
  outcomes,
  results,
  pricing,
}: CourseProgramProps) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white p-8">
      <ProgramBanner title={title} subtitle={subtitle} />

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div className="flex-1 flex flex-col gap-10">
          <div className="h-80 bg-gray-200 rounded-lg w-full" />
          <ProgramInfoGrid items={infoGrid} />
          <ProgramOverview text={overview} />
          <ProgramSection title="SAT Course Learning Outcomes:" content={outcomes} />
          <ProgramSection title="Results" content={results} />
        </div>

        <div className="w-full lg:w-96">
          <PricingCard pricing={pricing} />
        </div>
      </div>
    </div>
  );
};

export default CourseProgram;
