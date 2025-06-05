import CourseBanner from "./CourseBanner";
import Image from "next/image";
import ActCourseProgramImage from "@/assets/images/Home/Act-course-program-image.png";
import AdvancePlacementImage from "@/assets/images/Home/Advance-placement-image.png";

const BannerSection = () => {
  return (
    <div className="space-y-20">
      <CourseBanner
        reverse
        title={
          <>
            <span className="text-link">ACT COURSE PROGRAM </span>
          </>
        }
        subtitle={
          <>
            <span className="text-counter-label">
              Excel on the ACT with expert instructors and rigorous practice.
            </span>
          </>
        }
        description={
          <>
            <span className="text-counter-label">
              20–30 hours of live one-on-one coaching", "Expert tutoring in
              English, Math, Reading, Science & Essay by 4 domain experts",
              "Comprehensive study material, assignments & test papers", "24
              sectional tests & 24 full mock tests on a digital platform", "Test
              review & discussion classes + Prep Manager support", "Regular
              online Parent-Tutor Meetings (min. 2)
            </span>
          </>
        }
        image={
          <Image
            src={ActCourseProgramImage}
            alt="ACT Program"
            width={500}
            height={300}
            className="rounded-2xl"
          />
        }
        buttonText="View All Programs"
        buttonVariant="primary"
      />

      <CourseBanner
        title={
          <>
            <span className="text-link">SAT Course Program</span>
          </>
        }
        subtitle={
          <>
            <span className="text-counter-label">
               Unlock your full potential with our structured SAT program.
            </span>
          </>
        }
        description={
          <>
            <span className="text-counter-label">
              25-35 hrs one-on-one + 10-15 hrs group classes Expert tutoring in
              Math, Reading & Writing by 3 domain expert Comprehensive study
              material, 18 sectional tests & 18 full mocks 3 live proctored mock
              tests Test review & discussion classes + Prep Manager support
              Regular online Parent-Tutor Meetings (min. 2)
            </span>
          </>
        }
        image={
          <Image
            src={AdvancePlacementImage}
            alt="Logo"
            width={500}
            height={300}
          />
        }
        buttonText="View All Programs"
        buttonVariant="primary"
      />
    </div>
  );
};
export default BannerSection;
