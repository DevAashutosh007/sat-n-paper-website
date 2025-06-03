import React from "react";

const Page = () => {
  return (
    <div className="p-10 bg-gray-100 text-gray-800 font-sans leading-relaxed">
      <header className="text-center mb-5">
        <h1 className="text-4xl font-bold m-0">Privacy Policy</h1>
        <p className="text-base text-gray-600">Last Updated: 14-11-2024</p>
      </header>

      <section className="bg-white p-5 rounded-lg shadow-md">
        <p>
          Thank you for using Zupians, an HRMS tool provided by PHOENIX
          EDUCATIONAL INSTITUTE PRIVATE LIMITED (&quot;Company&quot;) to manage
          employee operations such as attendance, payroll, and team
          coordination. This Privacy Policy explains what personal information
          we collect from employees, how we use it, and how we protect it.
        </p>

        <h2 className="mt-5 text-xl font-semibold">Key Terms</h2>
        <p>
          When we refer to &quot;Users,&quot; we mean employees (Contract or
          Fulltime) of PHOENIX EDUCATIONAL INSTITUTE PRIVATE LIMITED who use
          Zupians. Any other capitalized terms not defined in this Privacy
          Policy have the meanings outlined in our internal guidelines or Terms
          of Use.
        </p>

        <h2 className="mt-5 text-xl font-semibold">
          How This Privacy Policy Applies
        </h2>
        <p>
          This Privacy Policy covers the handling of personal information that
          we collect and use for internal purposes related to Zupians. This
          policy does not apply to the personal information of employees outside
          the context of using Zupians.
        </p>

        <h2 className="mt-5 text-xl font-semibold">
          Personal Information We Collect
        </h2>
        <p>
          We collect personal information necessary to facilitate HR operations
          and employee coordination, including:
        </p>
        <ul className="list-disc pl-5">
          <li>Name and contact details (e.g., email address, phone number).</li>
          <li>
            Employee department, designation, and role within the Company.
          </li>
          <li>Attendance records, timesheets, and late hours.</li>
          <li>
            Payroll information, including salary details and tax information.
          </li>
          <li>
            Data related to HR operations, including bonuses, promotions, and
            resignations.
          </li>
          <li>
            Information provided by Users in team collaboration or training
            modules.
          </li>
        </ul>

        <h2 className="mt-5 text-xl font-semibold">
          How We Collect Personal Information
        </h2>
        <p>We collect personal information in the following ways:</p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Directly from Users:</strong> When you update your profile,
            mark attendance, or submit requests in Zupians.
          </li>
          <li>
            <strong>Automatically:</strong> When you use Zupians, we collect
            information such as system interaction data, IP addresses, and
            device/browser details.
          </li>
          <li>
            <strong>From Internal Systems:</strong> Information may be shared
            with Zupians from other internal HR or payroll systems.
          </li>
        </ul>

        <h2 className="mt-5 text-xl font-semibold">
          How We Protect Your Personal Information
        </h2>
        <p>We prioritize the protection of employee data. Measures include:</p>
        <ul className="list-disc pl-5">
          <li>Encrypting sensitive records such as payroll data.</li>
          <li>
            Implementing secure access controls and regular system audits.
          </li>
          <li>
            Maintaining up-to-date firewalls and multi-factor authentication
            protocols.
          </li>
        </ul>

        <h2 className="mt-5 text-xl font-semibold">
          How We Use Your Information
        </h2>
        <p>
          Zupians is used solely for internal HR operations and workforce
          management. The collected personal information is used to:
        </p>
        <ul className="list-disc pl-5">
          <li>Manage employee attendance, timesheets, and payroll.</li>
          <li>
            Coordinate HR operations such as leave management, promotions, and
            bonuses.
          </li>
          <li>Facilitate team collaboration and employee training programs.</li>
          <li>
            Ensure compliance with internal HR policies and government
            regulations.
          </li>
        </ul>

        <h2 className="mt-5 text-xl font-semibold">
          Updating Personal Information
        </h2>
        <p>
          Employees can update their personal information directly within
          Zupians or by contacting the Company’s HR department. Changes will be
          verified to ensure consistency and accuracy in HR records.
        </p>

        <h2 className="mt-5 text-xl font-semibold">Third-Party Access</h2>
        <p>
          Zupians does not share personal information with third parties outside
          the Company. However, trusted service providers may assist with data
          hosting or technical support under strict confidentiality agreements.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Purpose</th>
                <th className="p-2 border">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Microsoft Azure</td>
                <td className="p-2 border">
                  Cloud data storage and HR platform hosting
                </td>
                <td className="p-2 border">Global</td>
              </tr>
              <tr>
                <td className="p-2 border">Twilio Inc.</td>
                <td className="p-2 border">
                  Notification and communication services (if applicable)
                </td>
                <td className="p-2 border">United States</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-5 text-xl font-semibold">Data Retention</h2>
        <p>
          We retain data only as long as necessary for internal HR operations,
          compliance, and legal purposes. The data retention periods are as
          follows:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Retention Period</th>
                <th className="p-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">1 Year</td>
                <td className="p-2 border">
                  Attendance and timesheet data is retained for 1 year for
                  audits and record-keeping.
                </td>
              </tr>
              <tr>
                <td className="p-2 border">5 Years</td>
                <td className="p-2 border">
                  Payroll and financial data is retained for 5 years to comply
                  with tax and labor laws.
                </td>
              </tr>
              <tr>
                <td className="p-2 border">7 Years</td>
                <td className="p-2 border">
                  Employee records, including HR operations data, are retained
                  for 7 years for comprehensive historical records.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>After these periods, data is securely archived or deleted.</p>

        <h2 className="mt-5 text-xl font-semibold">Legal Compliance</h2>
        <p>
          We may disclose personal information if required by law or in response
          to a legitimate request from law enforcement or government officials.
        </p>

        <h2 className="mt-5 text-xl font-semibold">Limited Use Policy</h2>
        <p>
          Data obtained through integrations or APIs (e.g., payroll systems) is
          used strictly for its designated purpose and is not disclosed or
          stored beyond the necessary duration. Zupians adheres to all
          third-party service privacy terms and policies.
        </p>

        <h2 className="mt-5 text-xl font-semibold">Cookies Policy</h2>
        <p>
          Zupians may use cookies to improve the User experience and track
          interaction within the platform. Users can manage their cookie
          preferences through their browser settings.
        </p>

        <h2 className="mt-5 text-xl font-semibold">Changes to the Agreement</h2>
        <p>
          We reserve the right to modify or update this Agreement at any time.
          Users will be notified of any material changes, and continued use of
          Zupians after such changes will constitute acceptance of the updated
          Agreement.
        </p>

        <h2 className="mt-5 text-xl font-semibold">Contact Information</h2>
        <p>
          For any questions, concerns, or requests regarding this Agreement or
          the privacy of your information, please contact us at:{" "}
          <a
            href="mailto:support@zupians.com"
            className="text-blue-600 hover:underline"
          >
            support@zupians.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default Page;
