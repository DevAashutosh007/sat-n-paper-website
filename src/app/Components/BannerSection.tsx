import CourseBanner from "./CourseBanner";

const BannerSection = () => {
  return (
    <div className="space-y-20">
      <CourseBanner
        title="SAT Course Program"
        subtitle="Unlock your full potential with our structured SAT program."
        description={`25-35 hrs one-on-one + 10-15 hrs group classes
Expert tutoring in Math, Reading & Writing by 3 domain expert
Comprehensive study material, 18 sectional tests & 18 full mocks
3 live proctored mock tests
Test review & discussion classes + Prep Manager support
Regular online Parent-Tutor Meetings (min. 2)`}
        image={
          <div className="w-full h-64 bg-zinc-300 opacity-50 rounded-2xl" />
        }
      />

      <CourseBanner
        reverse
        title="ACT Course Program"
        subtitle="Excel on the ACT with expert instructors and rigorous practice."
        description={`20-30 hours of live one-on-one coaching
Expert tutoring in English, Math, Reading, Science & Essay by 4 domain experts
Comprehensive study material, assignments & test papers
24 sectional tests & 24 full mock tests on a digital platform
Test review & discussion classes + Prep Manager support
Regular online Parent-Tutor Meetings (min. 2)`}
        image={
          <div className="w-full h-64 bg-zinc-300 opacity-50 rounded-2xl" />
        }
      />
    </div>
  );
};

export default BannerSection;
