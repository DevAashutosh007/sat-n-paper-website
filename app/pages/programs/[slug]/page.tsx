// pages/programs/[slug].tsx
import { useRouter } from "next/router";
import { coursePrograms } from "@/data/coursePrograms";
import CourseProgram from "@/components/CourseProgram/CourseProgram";

const CourseProgramPage = () => {
  const { query, isFallback } = useRouter();
  const { slug } = query;

  if (isFallback) return <p>Loading...</p>;

  const program = coursePrograms.find((item) => item.slug === slug);

  if (!program) return <p>Program not found</p>;

  return <CourseProgram {...program} />;
};

export default CourseProgramPage;
