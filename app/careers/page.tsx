import TabbedResults from "@/components/TabbedResults";
import React from "react";

const page = () => {
  return (
    <div>
      <TabbedResults />
      <div className="w-[1440px] h-[1185px] relative bg-white overflow-hidden">
        {/* Updated header with primary background */}
        <div className="w-full h-20 left-0 top-0 absolute bg-primary"></div>

        {/* Title and Subtitle */}
        <div className="w-[692px] left-[80px] top-[128px] absolute inline-flex flex-col justify-start items-start gap-1">
          <div className="inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-muted text-5xl font-semibold font-['Poppins'] leading-[62.40px]">
              AP Results
            </div>
          </div>
          <div className="self-stretch justify-center text-muted text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
            Unlock your full potential with our structured SAT program.
          </div>
        </div>

        {/* Table Header */}
        <div className="w-[1013px] left-[341px] top-[254px] absolute outline outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-end gap-4">
          <div className="self-stretch h-12 px-4 py-1 bg-gray-200 rounded-lg inline-flex justify-between items-center">
            <div className="w-60 justify-center text-muted text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
              Student Name
            </div>
            <div className="flex justify-end items-start gap-9">
              <div className="w-36 justify-center text-muted text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
                Score
              </div>
              <div className="w-96 justify-center text-muted text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
                School Name
              </div>
            </div>
          </div>

          {/* Row Items */}
          {[
            ['Abhishek Sharma', '1600', 'The International School Bangalore'],
            ['Lakshita Baria', '1600', 'Lotus Valley International School'],
            ['Rohit Mehta', '1550', 'Dhirubhai Ambani International School'],
            ['Aisha Khan', '1620', 'The Shri Ram School'],
            ['Nikhil Verma', '1580', 'The Doon School'],
            ['Priya Gupta', '1610', 'Riverside School'],
            ['Sanjay Patel', '1590', 'Sardar Patel Vidyalaya'],
            ['Meera Joshi', '1630', 'The Asian School'],
            ['Vikram Singh', '1575', "St. Xavier's School"],
            ['Radha Mehta', '1640', 'Vasant Valley School'],
            ['Karan Bhatia', '1605', "Bishop Cotton Boys' School"],
            ['Sneha Iyer', '1615', "National Public School"]
          ].map(([name, score, school], idx) => (
            <div key={idx} className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-muted text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                {name}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-muted text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
                  {score}
                </div>
                <div className="w-96 justify-center text-muted text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  {school}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
