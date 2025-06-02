import QuickAnswer from "@/components/QuickAnswer";
import SATPage from "@/components/SATPage";
import Programs from "@/pages/programs";
import BannerSection from "./components/BannerSection";

export default function Home() {
  return (
    <>
      <BannerSection />
      <Programs />
      <QuickAnswer />
      <SATPage />
    </>
  );
}
