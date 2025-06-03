import React from "react";

const Page = () => {
  return (
    <div className="px-6 py-12 bg-gray-100 text-gray-800 font-sans leading-relaxed md:px-16 lg:px-32">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Use (&quot;Terms&quot;)</h1>
        <p className="text-sm text-gray-500">Last Updated: 14-11-2024</p>
      </header>

      <section className="bg-white p-6 md:p-10 rounded-xl shadow-md space-y-8">
        <p>
          Zupians is an internal HRMS tool provided by PHOENIX EDUCATIONAL
          INSTITUTE PRIVATE LIMITED ("Company") for managing employee
          operations, including attendance, payroll, recruitment, and HR
          policies. The use of Zupians is subject to the following Terms of Use
          ("TOU"). The Company reserves the right to update the TOU at
          any time with or without notice. The most current version of the TOU
          can be reviewed by visiting{" "}
          <a
            href="https://zupians.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            zupians.com/terms
          </a>.
        </p>

        <h2 className="text-2xl font-semibold">Purpose and Scope</h2>
        <p>
          Zupians is intended exclusively for internal use by employees of
          PHOENIX EDUCATIONAL INSTITUTE PRIVATE LIMITED. By accessing and using
          Zupians, you acknowledge and agree that it is to be used solely for
          Company-related HR purposes, such as managing attendance, payroll,
          team collaboration, and HR operations.
        </p>

        <h2 className="text-2xl font-semibold">User Registration</h2>
        <p>
          As a condition of using Zupians, you may be required to register with
          your Company email and a password to access the tool. You agree to
          provide accurate, complete, and up-to-date registration information.
          PHOENIX EDUCATIONAL INSTITUTE PRIVATE LIMITED reserves the right to
          manage or restrict user access as deemed necessary.
        </p>

        <h2 className="text-2xl font-semibold">Confidentiality and Security</h2>
        <p>
          You are responsible for maintaining the confidentiality of your login
          credentials and are prohibited from sharing your account or access
          with anyone outside the Company. You are expected to report any
          unauthorized access or security concerns immediately to the Company IT
          department.
        </p>

        <h2 className="text-2xl font-semibold">License Grant and Usage Restrictions</h2>
        <p>
          PHOENIX EDUCATIONAL INSTITUTE PRIVATE LIMITED grants you a limited,
          non-transferable, non-exclusive license to use Zupians solely for
          internal HR-related purposes. Unauthorized use, reproduction, or
          distribution of Zupians for personal, non-Company-related purposes is
          prohibited.
        </p>
        <p>
          All rights not expressly granted are reserved by PHOENIX EDUCATIONAL
          INSTITUTE PRIVATE LIMITED. Any attempt to misuse, duplicate, or
          distribute Zupians for purposes outside of Company operations is a
          breach of these terms.
        </p>

        <h2 className="text-2xl font-semibold">No Fees or Charges</h2>
        <p>
          Zupians is provided as a complimentary tool for Company employees.
          There are no subscription fees or charges for the use of Zupians.
        </p>

        <h2 className="text-2xl font-semibold">Changes to Terms</h2>
        <p>
          These terms may be updated periodically. Changes take effect when
          posted on the internal Zupians portal. Notifications regarding updates
          will be displayed within Zupians or communicated through Company
          email.
        </p>

        <h2 className="text-2xl font-semibold">Termination of Access</h2>
        <p>
          The Company reserves the right to revoke access to Zupians for any
          user at its discretion, especially in cases of non-compliance with
          these Terms or misuse of the tool. Access to Zupians will
          automatically terminate upon the end of your employment with PHOENIX
          EDUCATIONAL INSTITUTE PRIVATE LIMITED.
        </p>

        <h2 className="text-2xl font-semibold">Data Privacy and Storage</h2>
        <p>
          Zupians may collect and process information related to HR operations,
          including attendance records, payroll data, performance evaluations,
          and team collaboration activities. This data is stored securely and is
          only accessible to authorized Company personnel.
        </p>

        <h2 className="text-2xl font-semibold">Employee Responsibilities</h2>
        <p>
          Employees are expected to use Zupians responsibly and in compliance
          with the Company’s HR policies. Misuse of Zupians, such as falsifying
          attendance records or unauthorized access to sensitive data, may
          result in disciplinary actions.
        </p>

        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p>
          For questions or concerns regarding Zupians usage, please contact the
          PHOENIX EDUCATIONAL INSTITUTE PRIVATE LIMITED HR or IT department or
          email{" "}
          <a
            href="mailto:support@zupians.com"
            className="text-blue-600 hover:underline"
          >
            support@zupians.com
          </a>.
        </p>
      </section>
    </div>
  );
};

export default Page;
