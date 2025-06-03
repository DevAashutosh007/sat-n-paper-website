import QuickAnswer from "@/components/QuickAnswer";
import SATPage from "@/components/SATPage";
import Programs from "@/app/programs/page";
import BannerSection from "@/components/BannerSection";

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
