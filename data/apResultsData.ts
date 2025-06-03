export type TabKey =
  | "AP Statistics"
  | "AP Calculus BC"
  | "AP Calculus AB"
  | "AP Precalculus"
  | "AP Psychology"
  | "AP Computer Science A"
  | "AP Physics C Mechanics"
  | "AP Physics 1"
  | "AP Physics C Electricity & Magnetism"
  | "AP Microeconomics"
  | "AP Macroeconomics"
  | "AP Environmental Science"
  | "AP Human Geography"
  | "AP US History"
  | "AP World History"
  | "AP Biology"
  | "AP Comparative Government and Politics";

export const apResultsData: Record<
  TabKey,
  { name: string; score: number; school: string }[]
> = {
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
  ],
  "AP Calculus BC": [
    { name: "Ritika Sen", score: 34, school: "Greenwood High" },
    { name: "Aman Yadav", score: 35, school: "Delhi Public School" },
  ],
  "AP Calculus AB": [],
  "AP Precalculus": [],
  "AP Psychology": [],
  "AP Computer Science A": [],
  "AP Physics C Mechanics": [],
  "AP Physics 1": [],
  "AP Physics C Electricity & Magnetism": [],
  "AP Microeconomics": [],
  "AP Macroeconomics": [],
  "AP Environmental Science": [],
  "AP Human Geography": [],
  "AP US History": [],
  "AP World History": [],
  "AP Biology": [],
  "AP Comparative Government and Politics": [],
};
