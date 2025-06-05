"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 7500, label: "Students Trained" },
  { value: 500, label: "Tutors & Mentors" },
  { value: 72, label: "Countries Served" },
  { value: 1216, label: "Students Scored 1500+" },
];

const StatsCounter = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounts();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const animateCounts = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    const increments = stats.map((stat) => stat.value / steps);

    let currentCounts = [...counts];
    let step = 0;

    const counter = setInterval(() => {
      step++;
      currentCounts = currentCounts.map((count, i) =>
        Math.min(Math.floor(count + increments[i]), stats[i].value)
      );
      setCounts([...currentCounts]);

      if (step >= steps) clearInterval(counter);
    }, interval);
  };

  return (
    <div
      ref={sectionRef}
      className="bg-counter py-10 border-t border-counter"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={stat.label}>
            <h3 className="text-3xl font-bold text-counter-heading">
              {counts[index]}+
            </h3>
            <p className="mt-2 text-counter-label text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;
