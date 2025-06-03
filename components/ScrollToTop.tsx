"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname(); // Detect route change

  useEffect(() => {
    const mainBody = document.getElementById("main-body");
    if (mainBody) {
      mainBody.scrollTo({ top: 0, behavior: "smooth" }); 
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
