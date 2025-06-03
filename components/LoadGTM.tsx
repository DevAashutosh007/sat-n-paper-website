"use client"; 
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const LoadGTM = () => {
  useEffect(() => {
    const handleUserInteraction = () => {
      // Inject GTM script dynamically
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-5NF0S6LJ";
      script.async = true;
      document.body.appendChild(script);

      // Initialize dataLayer properly
      window.dataLayer = window.dataLayer || [];

      // Define gtag function
      window.gtag = function (...args) {
        window.dataLayer.push(args);
      };

      // Correctly configure Google Tag Manager
      window.gtag("js", new Date());
      window.gtag("config", "G-5NF0CTS6LJ", { send_page_view: false });

      // Remove event listeners to prevent multiple executions
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
    };

    // Load GTM only after user interaction (click or scroll)
    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("scroll", handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
    };
  }, []);

  return null;
};

export default LoadGTM;
