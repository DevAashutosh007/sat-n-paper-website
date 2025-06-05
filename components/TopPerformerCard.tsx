import React from "react";
import TopPerformerRow from "./TopPerformerRow";

type Student = {
  name: string;
  school: string;
  score: string;
  city: string;
};

type Props = {
  title: string;
  students: Student[];
  width?: string;
  height?: string;
};

const TopPerformerCard: React.FC<Props> = ({
  title,
  students,
  width = "w-[400px]",
  height = "h-[400px]",
}) => {
  return (
    <div
      className={`bg-muted rounded-2xl relative p-4 ${width} ${height} flex flex-col`}
    >
      <div className="text-2xl font-semibold text-foreground text-center mb-4">
        {title}
      </div>
      <div className="overflow-y-auto flex-1 space-y-3 pr-1">
        {students.map((student, index) => (
          <TopPerformerRow key={index} {...student} />
        ))}
      </div>
    </div>
  );
};

export default TopPerformerCard;
