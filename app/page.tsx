import QuickAnswer from "@/components/QuickAnswer";
import SATPage from "@/components/SATPage";
import StatsCounter from "@/components/CounterComponent";
import BannerSection from "@/components/BannerSection";
import Header from "@/app/Header";
import CourseProgramsPage from "./programs/page";
import CourseBanner from "@/components/CourseBanner";
import Image from "next/image";
import BannerImage1 from "@/assets/images/Home/Banner-image-1 .png";

export default function Home() {
  return (
    <>
      <Header />
      <CourseBanner
        reverse
        title={
          <>
            <span className="text-link">Crack the </span>
            <span className="text-primary">SAT</span>
            <span className="text-link">, Conquer the </span>
            <span className="text-primary">ACT</span>
            <span className="text-link"> – No guesswork, Just Results</span>
          </>
        }
        description={`We don't believe in one-size-fits-all solutions. Meet with our team to discover the program that best fits your child's needs and ambitions.`}
        image={<Image src={BannerImage1} alt="Logo" width={500} height={300} />}
        buttonText="Schedule Meet"
      />
      <StatsCounter />

      <BannerSection />
      <CourseProgramsPage />
      <QuickAnswer />
      <SATPage />
    
    </>
  );
}
