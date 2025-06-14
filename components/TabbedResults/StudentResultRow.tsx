import React from 'react';

type Props = {
  student: {
    name: string;
    score: number;
    school: string;
  };
};

const StudentResultRow: React.FC<Props> = ({ student }) => {
  return (
    <div className="flex px-4 py-2 border-t border-muted text-sm text-primaryHeader hover:bg-muted transition">
      <div className="w-1/3">{student.name}</div>
      <div className="w-1/6 text-center font-medium">{student.score}</div>
      <div className="w-1/2 text-right">{student.school}</div>
    </div>
  );
};


export default StudentResultRow;
