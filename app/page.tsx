import QuickAnswer from "@/components/QuickAnswer";
import SATPage from "@/components/SATPage";
import StatsCounter from "@/components/CounterComponent";
import BannerSection from "@/components/BannerSection";
import Header from "@/app/Header";
import CourseProgramsPage from "./programs/page";

export default function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <StatsCounter />
      <CourseProgramsPage />
      <QuickAnswer />
      <SATPage />
    </>
  );
}
