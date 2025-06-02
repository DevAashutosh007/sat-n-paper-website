"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I know which program is right for my child?",
    answer:
      "We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track.",
  },
  {
    question: "How personalized is the learning experience?",
    answer: "We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track.",
  },
  {
    question: "Are the mentors and tutors experienced?",
    answer: "We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track.",
  },
  {
    question: "Can I track my child’s progress?",
    answer: "We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track.",
  },
  {
    question: "What resources are available for additional support?",
    answer: "We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track.",
  },
];

const QuickAnswer: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between gap-12">
      {/* Left Section */}
      <div className="max-w-md space-y-6">
        <div className="space-y-1">
          <h2 className="text-5xl font-semibold text-zinc-500 font-poppins leading-tight">
            Quick Answers
          </h2>
          <p className="text-xl text-neutral-500 font-poppins leading-7 tracking-tight">
            We’ve answered the most common ones below. Still unsure? Feel free
            to connect with us — we’re here to help.
          </p>
        </div>
        <button className="px-6 py-3 bg-zinc-500 rounded-xl text-white text-base font-medium font-poppins">
          Let’s Connect
        </button>
      </div>

      {/* Right Section (FAQs) */}
      <div className="flex flex-col gap-4 w-full lg:w-[60%]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-neutral-50 rounded-lg shadow-md px-6 py-4"
          >
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleIndex(index)}
            >
              <span className="text-2xl text-neutral-500 font-medium font-poppins leading-loose tracking-wide">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-neutral-500" />
              ) : (
                <ChevronDown className="w-6 h-6 text-neutral-500" />
              )}
            </button>
            {openIndex === index && faq.answer && (
              <p className="mt-2 text-neutral-500 text-lg leading-7 tracking-tight font-poppins">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickAnswer;
