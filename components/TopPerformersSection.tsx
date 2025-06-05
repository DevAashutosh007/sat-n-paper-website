import React from "react";
import TopPerformerCard from "./TopPerformerCard";

const courseResults = [
  {
    courseName: "ACT",
    students: [
      { name: "Arzoo Maheshwari", school: "Dhirubhai Ambani Inter...", score: "1580", city: "Mumbai" },
      { name: "Rohit Sharma", school: "Mumbai International School", score: "1575", city: "Mumbai" },
      { name: "Ananya Iyer", school: "Bangalore International School", score: "1600", city: "Bangalore" },
      { name: "Siddharth Verma", school: "Delhi Public School", score: "1620", city: "Delhi" },
      { name: "Neha Gupta", school: "Chennai International School", score: "1590", city: "Chennai" },
    ],
  },
  {
    courseName: "SAT",
    students: [
      { name: "Karan Mehta", school: "Hyderabad Public School", score: "1550", city: "Hyderabad" },
      { name: "Pooja Kapoor", school: "Pune International School", score: "1615", city: "Pune" },
      { name: "Vikram Singh", school: "Kolkata International School", score: "1585", city: "Kolkata" },
      { name: "Sneha Desai", school: "Ahmedabad International", score: "1570", city: "Ahmedabad" },
    ],
  },
];

const TopPerformersSection = () => {
  return (
    <div className="w-full py-12 flex flex-col items-center gap-10">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-muted-foreground">Our Top Performers</h2>
        <p className="text-lg text-secondary mt-2">Subtext for result section</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-6 overflow-x-auto">
        {courseResults.map((result) => (
          <TopPerformerCard
            key={result.courseName}
            title={result.courseName}
            students={result.students}
            width="w-[420px]"
            height="h-[400px]"
          />
        ))}
      </div>
    </div>
  );
};

export default TopPerformersSection;
