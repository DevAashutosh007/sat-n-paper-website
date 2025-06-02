const ProgramOverview = ({ text }: { text: string }) => (
  <div className="border border-zinc-300 rounded-lg p-6 space-y-4">
    <h2 className="text-xl font-medium text-neutral-500">Overview</h2>
    <p className="text-base text-neutral-500 whitespace-pre-line">{text}</p>
  </div>
);

export default ProgramOverview;
