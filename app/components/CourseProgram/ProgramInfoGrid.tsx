const ProgramInfoGrid = ({ items }: { items: { label: string; value: string }[] }) => (
  <div className="flex flex-wrap justify-start gap-5">
    {items.map(({ label, value }) => (
      <div key={label} className="w-36 text-center">
        <p className="text-base text-neutral-500">{label}</p>
        <p className="font-medium text-neutral-500">{value}</p>
      </div>
    ))}
  </div>
);


export default ProgramInfoGrid;
