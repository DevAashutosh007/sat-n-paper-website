import React from "react";

type Props = {
  name: string;
  school: string;
  score: string;
  city: string;
};

const TopPerformerRow: React.FC<Props> = ({ name, school, score, city }) => {
  return (
    <div className="bg-white rounded-md p-2 flex justify-between items-center shadow-sm">
      <div className="flex flex-col">
        <span className="text-base font-medium text-neutral-700">{name}</span>
        <span className="text-sm text-neutral-500 truncate">{school}</span>
      </div>
      <div className="flex flex-col text-right">
        <span className="text-base font-semibold text-neutral-700">{score}</span>
        <span className="text-sm text-neutral-500">{city}</span>
      </div>
    </div>
  );
};

export default TopPerformerRow;
