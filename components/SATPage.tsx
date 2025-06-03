import CourseProgram from "@/components/CourseProgram/CourseProgram";

const satCourseData = {
  title: "SAT Course Program",
  subtitle: "Unlock your full potential with our structured SAT program.",
  overview: `Welcome to our comprehensive SAT Exam Online Course!...\n\nOur experienced instructors will guide you...`,
  infoGrid: [
    { label: "Language", value: "Multi Lingual" },
    { label: "Mode", value: "Online" },
    { label: "Students", value: "10,000+" },
    { label: "Experience", value: "20+ years" },
  ],
  outcomes: [
    "Test-Taking Strategies",
    "Reading Comprehension",
    "Grammar and Writing Skills",
    "Algebra and Advanced Math",
    "Personalized Practice and Feedback",
    "Stress Management and Confidence Building",
  ],
  results: [
    "Score improvement by 150+ points",
    "Higher acceptance rate in Ivy Leagues",
    "Confidence in time management",
  ],
  pricing: {
    original: 300000,
    discounted: 280000,
    discountText: "20% Off",
    features: [
      "25–35 hrs 1:1 mentoring",
      "10–15 hrs group classes",
      "Expert tutoring in Math, Reading & Writing",
      "Complete study material",
      "18 sectional + 18 full mock tests",
      "3 live proctored mocks",
      "Test reviews & discussion sessions",
      "Prep Manager support",
      "Min. 2 Parent-Tutor meetings",
    ],
  },
};

const SATPage = () => <CourseProgram {...satCourseData} />;
export default SATPage;
