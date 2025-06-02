const ProgramInfoGrid = () => {
  const info = [
    { label: "Language", value: "Multi Lingual" },
    { label: "Mode", value: "Online" },
    { label: "Students", value: "10,000+" },
    { label: "Experience", value: "20+ years" },
  ];

  return (
    <div className="flex flex-wrap justify-start gap-5">
      {info.map(({ label, value }) => (
        <div key={label} className="w-36 text-center">
          <p className="text-base text-neutral-500">{label}</p>
          <p className="font-medium text-neutral-500">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgramInfoGrid;
