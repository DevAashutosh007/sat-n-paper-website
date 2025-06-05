// components/TopPerformerRow.tsx

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
        <span className="text-base font-medium text-counter-label">{name}</span>
        <span className="text-sm text-muted-foreground truncate">{school}</span>
      </div>
      <div className="flex flex-col text-right">
        <span className="text-base font-semibold text-counter-heading">{score}</span>
        <span className="text-sm text-muted-foreground">{city}</span>
      </div>
    </div>
  );
};

export default TopPerformerRow;
