import React from "react";
import ProgramBanner from "./ProgramBanner";
import ProgramInfoGrid from "./ProgramInfoGrid";
import ProgramOverview from "./ProgramOverview";
import ProgramSection from "./ProgramSection";
import PricingCard from "./PricingCard";

const CourseProgram = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white p-8">
      <ProgramBanner
        title="SAT Course Program"
        subtitle="Unlock your full potential with our structured SAT program."
      />

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div className="flex-1 flex flex-col gap-10">
          <div className="h-80 bg-gray-200 rounded-lg w-full" />
          <ProgramInfoGrid />
          <ProgramOverview />
          <ProgramSection title="SAT Course Learning Outcomes:" content={outcomes} />
          <ProgramSection title="Results" content={results} />
        </div>

        <div className="w-full lg:w-96">
          <PricingCard />
        </div>
      </div>
    </div>
  );
};

const outcomes = [
  "Test-Taking Strategies",
  "Reading Comprehension",
  "Grammar and Writing Skills",
  "Algebra and Advanced Math",
  "Personalized Practice and Feedback",
  "Stress Management and Confidence Building",
];

const results = [...outcomes]; // Reusing same content

export default CourseProgram;
