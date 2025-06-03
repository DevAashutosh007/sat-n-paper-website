import TabbedResults from "@/components/TabbedResults";
import React from "react";

const page = () => {
  return (
    <div>
      <TabbedResults/>  
      <div className="w-[1440px] h-[1185px] relative bg-white overflow-hidden">
        <div className="w-[1440px] h-20 left-0 top-0 absolute bg-zinc-300"></div>
        <div className="w-[692px] left-[80px] top-[128px] absolute inline-flex flex-col justify-start items-start gap-1">
          <div className="inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-zinc-500 text-5xl font-semibold font-['Poppins'] leading-[62.40px]">
              AP Results{" "}
            </div>
          </div>
          <div className="self-stretch justify-center text-neutral-500 text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
            Unlock your full potential with our structured SAT program.
          </div>
        </div>
        <div className="w-[1013px] left-[341px] top-[254px] absolute outline  outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-end gap-4">
          <div className="self-stretch h-12 px-4 py-1 bg-gray-200 rounded-lg inline-flex justify-between items-center">
            <div className="w-60 justify-center text-neutral-500 text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
              Student Name
            </div>
            <div className="flex justify-end items-start gap-9">
              <div className="w-36 justify-center text-neutral-500 text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
                Score
              </div>
              <div className="w-96 justify-center text-neutral-500 text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
                School Name
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                Abhishek Sharma{" "}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-neutral-500 text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
                  1600
                </div>
                <div className="w-96 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  The International School Bangalore
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                Lakshita Baria{" "}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-neutral-500 text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
                  1600
                </div>
                <div className="w-96 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  {" "}
                  Lotus Valley International School
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                Rohit Mehta{" "}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  1550
                </div>
                <div className="w-96 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  Dhirubhai Ambani International School
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                Aisha Khan{" "}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  1620
                </div>
                <div className="w-96 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  The Shri Ram School
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                Nikhil Verma{" "}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-neutral-500 text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
                  1580
                </div>
                <div className="w-96 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  The Doon School
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                Priya Gupta{" "}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-neutral-500 text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
                  1610
                </div>
                <div className="w-96 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  Riverside School
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                Sanjay Patel{" "}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  1590
                </div>
                <div className="w-96 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  Sardar Patel Vidyalaya
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                Meera Joshi{" "}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  1630
                </div>
                <div className="w-96 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  The Asian School
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                Vikram Singh{" "}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-neutral-500 text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
                  1575
                </div>
                <div className="w-96 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  St. Xavier's School
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                Radha Mehta{" "}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-neutral-500 text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
                  1640
                </div>
                <div className="w-96 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  Vasant Valley School
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                Karan Bhatia{" "}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  1605
                </div>
                <div className="w-96 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  Bishop Cotton Boys' School
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                Sneha Iyer{" "}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  1560
                </div>
                <div className="w-96 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  Mallya Aditi International School
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                Rajesh Kumar{" "}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-neutral-500 text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
                  1625
                </div>
                <div className="w-96 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  Sankalp International School
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-1 border-b border-gray-200 inline-flex justify-between items-center">
              <div className="w-60 h-8 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                Ananya Sethi{" "}
              </div>
              <div className="h-8 flex justify-start items-center gap-9">
                <div className="w-36 justify-center text-neutral-500 text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
                  1595
                </div>
                <div className="w-96 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
                  Delhi Public School
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-60 p-2 left-[80px] top-[257px] absolute rounded-lg outline  outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch px-1 bg-gray-200 rounded inline-flex justify-center items-center gap-2.5">
            <div className="flex-1 justify-center text-neutral-500 text-xl font-medium font-['Poppins'] leading-7 tracking-tight">
              AP Statistics
            </div>
          </div>
          <div className="self-stretch px-1 inline-flex justify-center items-center gap-2.5">
            <div className="flex-1 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
              AP Calculus BC
            </div>
          </div>
          <div className="self-stretch px-1 inline-flex justify-center items-center gap-2.5">
            <div className="flex-1 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
              AP Precalculus
            </div>
          </div>
          <div className="self-stretch px-1 inline-flex justify-center items-center gap-2.5">
            <div className="flex-1 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
              AP Psychology
            </div>
          </div>
          <div className="self-stretch px-1 bg-white rounded inline-flex justify-center items-center gap-2.5">
            <div className="flex-1 justify-center text-neutral-500 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
              AP Chemistry
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
