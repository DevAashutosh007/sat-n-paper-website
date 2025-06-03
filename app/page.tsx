import QuickAnswer from "@/components/QuickAnswer";
import SATPage from "@/components/SATPage";
import Programs from "@/app/programs/page";
import BannerSection from "@/components/BannerSection";
import Header from "@/app/Header";

export default function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <Programs />
      <QuickAnswer />
      <SATPage />
    </>
  );
}
