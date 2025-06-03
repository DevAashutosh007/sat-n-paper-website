// pages/programs/[slug].tsx
import { coursePrograms } from "@/app/data/coursePrograms";
import CourseProgram from "@/components/CourseProgram/CourseProgram";

interface Props {
  params: { slug: string };
}

const CourseProgramPage = ({ params }: Props) => {
  const { slug } = params;

  const program = coursePrograms.find((item) => item.slug === slug);

  if (!program) return <p>Program not found</p>;

  return <CourseProgram {...program} />;
};

export default CourseProgramPage;
