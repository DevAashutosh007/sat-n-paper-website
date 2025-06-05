"use client";

import React, { useState } from "react";
import Accordion from "@/components/Accordion";
import CommonButton from "./CommonButton";

const faqs = [
  {
    question: <span className="text-link"> "How do I know which program is right for my child?"</span>,
    answer:
     <span className="text-counter-label"> "We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track."</span>
  },
  {
    question: <span className="text-link">How personalized is the learning experience?</span>,
    answer:
     <span className="text-counter-label">We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track.</span>
  },
  {
    question: <span className="text-link">Are the mentors and tutors experienced?</span>,
    answer:
    <span className="text-counter-label">We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track.</span>
  },
  {
    question: <span className="text-link">Can I track my child’s progress?</span>,
    answer:
    <span className="text-counter-label">We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track.</span>
  },
  {
    question: <span className="text-link">What resources are available for additional support?</span>,
    answer:
    <span className="text-counter-label">We start with a free consultation to understand your child’s academic goals, learning style, and timeline. Based on that, our team recommends a tailored program that fits their needs — whether it's SAT, ACT, or a focused skill-building track.</span>
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
          <h2 className="text-3xl sm:text-5xl font-semibold text-link font-poppins leading-snug sm:leading-tight">
            Quick Answers
          </h2>
          <p className="text-base sm:text-xl text-counter-label font-poppins leading-relaxed tracking-tight">
            We’ve answered the most common ones below. Still unsure? Feel free
            to connect with us — we’re here to help.
          </p>
        </div>
        <CommonButton variant="primary">Let's Connect</CommonButton>
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
