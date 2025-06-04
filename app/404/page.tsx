// 404Page.js
import React from "react";
import CommonButton from "@/components/CommonButton";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative text-center px-4">
      <div className="text-6xl font-bold text-primary">404</div>
      <div className="text-xl text-gray-700 mt-4">
        Looks like this page doesn't exist!
      </div>
      <div className="text-base text-gray-500 mb-8 mt-2">
        Go back to home and continue exploring.
      </div>
      <CommonButton variant="secondary">Back to Home</CommonButton>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 flex gap-4 opacity-30">
        <div className="w-12 h-12 bg-primary rounded-full" />
        <div className="w-16 h-2.5 bg-primary" />
        <div className="w-12 h-8 bg-primary rounded-[20%]" />
      </div>
    </div>
  );
};

export default NotFoundPage;
