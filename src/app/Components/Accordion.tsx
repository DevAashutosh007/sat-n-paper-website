"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionProps {
  label: string;
  value: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  label,
  value,
  isOpen = false,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="bg-neutral-50 rounded-lg shadow-md px-4 py-3 sm:px-6 sm:py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={onToggle}
      >
        <span className="text-lg sm:text-2xl text-neutral-500 font-medium font-poppins leading-snug tracking-wide">
          {label}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
        ) : (
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
        )}
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          transition: "max-height 0.4s ease",
          overflow: "hidden",
        }}
      >
        <p className="mt-2 text-sm sm:text-lg text-neutral-500 leading-6 sm:leading-7 tracking-tight font-poppins">
          {value}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
