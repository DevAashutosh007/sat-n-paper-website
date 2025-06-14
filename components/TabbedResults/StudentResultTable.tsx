import React from 'react';
import StudentResultRow from './StudentResultRow';

type Student = {
  name: string;
  score: number;
  school: string;
};

type Props = {
  results: Student[];
};

const StudentResultTable: React.FC<Props> = ({ results }) => {
  return (
    <div className="w-full overflow-auto border border-muted rounded-lg">
      <div className="flex bg-muted px-4 py-3 text-sm font-medium text-headerText">
        <div className="w-1/3">Student Name</div>
        <div className="w-1/6 text-center">Score</div>
        <div className="w-1/2 text-right">School Name</div>
      </div>

      {results.map((student, idx) => (
        <StudentResultRow key={idx} student={student} />
      ))}
    </div>
  );
};

export default StudentResultTable;
