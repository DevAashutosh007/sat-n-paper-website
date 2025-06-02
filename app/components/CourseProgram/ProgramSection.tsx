const ProgramSection = ({ title, content }: { title: string; content: string[] }) => (
  <div className="border border-zinc-300 rounded-lg p-6 space-y-4">
    <h2 className="text-xl font-medium text-neutral-500">{title}</h2>
    <ul className="list-disc list-inside text-base text-neutral-500 space-y-1">
      {content.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ProgramSection;
