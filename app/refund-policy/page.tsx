import React from "react";

const RefundPolicyPage = () => {
  return (
    <div className="p-10 bg-gray-100 text-gray-800 font-sans leading-relaxed">
      <header className="text-center mb-5">
        <h1 className="text-4xl font-bold m-0">Refund Policy</h1>
        <p className="text-base text-gray-600">Last Updated: 4 June 2025</p>
      </header>

      <section className="bg-white p-5 rounded-lg shadow-md space-y-4">
        <p>
          At Phoenix Educational Institute Private Limited, we strive to ensure
          satisfaction with our services. If you are not satisfied and wish to
          request a refund, please review our refund policy below.
        </p>

        <h2 className="text-xl font-semibold">1. Refund Before Course Start</h2>
        <p>
          You may claim a refund before the commencement of the course. In such
          cases, 90% of the course fee will be refunded. The remaining 10%
          covers administrative and processing charges.
        </p>

        <h2 className="text-xl font-semibold">
          2. No Refund After Classes Start
        </h2>
        <p>
          No refunds will be provided once the classes have commenced. This
          includes situations where the student has attended or missed any
          portion of the course.
        </p>

        <h2 className="text-xl font-semibold">3. Refund Processing Timeline</h2>
        <p>
          Approved refund requests will be processed within 5–7 business days.
          The time taken for the amount to reflect in your account may vary
          based on your payment provider.
        </p>

        <footer className="pt-5 border-t text-sm text-gray-500">
          © 2025 SAT n paper | Phoenix Educational Institute Private Limited
        </footer>
      </section>
    </div>
  );
};

export default RefundPolicyPage;
