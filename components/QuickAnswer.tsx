"use client";

import React, { useState } from "react";
import Accordion from "@/components/Accordion";
import CommonButton from "./CommonButton";

const faqs = [
  {
    question: "How do I know which program is right for my child?",
    answer:
      "We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track.",
  },
  {
    question: "How personalized is the learning experience?",
    answer:
      "We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track.",
  },
  {
    question: "Are the mentors and tutors experienced?",
    answer:
      "We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track.",
  },
  {
    question: "Can I track my child’s progress?",
    answer:
      "We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track.",
  },
  {
    question: "What resources are available for additional support?",
    answer:
      "We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track.",
  },
];

const QuickAnswer: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col lg:flex-row justify-between gap-10 sm:gap-12">
      {/* Left Section */}
      <div className="w-full lg:max-w-md space-y-5 sm:space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-5xl font-semibold text-secondary font-poppins leading-snug sm:leading-tight">
            Quick Answers
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground font-poppins leading-relaxed tracking-tight">
            We’ve answered the most common ones below. Still unsure? Feel free
            to connect with us — we’re here to help.
          </p>
        </div>
        <CommonButton variant="secondary">Let's Connect</CommonButton>
      </div>

      {/* Right Section (FAQs) */}
      <div className="w-full flex flex-col gap-4 lg:w-[60%]">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            label={faq.question}
            value={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default QuickAnswer;
