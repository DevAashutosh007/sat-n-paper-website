import React from "react";

const ProgramBanner = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="flex flex-col gap-1">
    <h1 className="text-5xl font-semibold text-zinc-500">{title}</h1>
    <p className="text-xl font-medium text-neutral-500">{subtitle}</p>
  </div>
);

export default ProgramBanner;
