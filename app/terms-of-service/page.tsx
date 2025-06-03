import React from "react";

const TermsOfServicePage = () => {
  return (
    <div className="p-10 bg-gray-100 text-gray-800 font-sans leading-relaxed">
      <header className="text-center mb-5">
        <h1 className="text-4xl font-bold m-0">Terms of Service</h1>
        <p className="text-base text-gray-600">Last Updated: 4 June 2025</p>
      </header>

      <section className="bg-white p-5 rounded-lg shadow-md space-y-4">
        <p>
          By accessing the website at{" "}
          <a href="https://satnpaper.com" className="text-blue-600 underline">
            https://satnpaper.com
          </a>
          , you are agreeing to be bound by these terms of service, all
          applicable laws and regulations, and agree that you are responsible
          for compliance with any applicable local laws. If you do not agree
          with any of these terms, you are prohibited from using or accessing
          this site. The materials contained in this website are protected by
          applicable copyright and trademark law.
        </p>

        <h2 className="text-xl font-semibold">1. Use License</h2>
        <p>
          a.) Permission is granted to temporarily download one copy of the
          materials (information or software) on Phoenix Educational Institute
          Private Limited’s website for personal, non-commercial transitory
          viewing only. This is the grant of a license, not a transfer of title,
          and under this license you may not:
        </p>
        <ul className="list-disc pl-5">
          <li>Modify or copy the materials;</li>
          <li>
            Use the materials for any commercial purpose, or for any public
            display (commercial or non-commercial);
          </li>
          <li>
            Attempt to decompile or reverse engineer any software contained on
            the website;
          </li>
          <li>
            Remove any copyright or other proprietary notations from the
            materials;
          </li>
          <li>
            Transfer the materials to another person or "mirror" the materials
            on any other server.
          </li>
        </ul>
        <p>
          b.) This license shall automatically terminate if you violate any of
          these restrictions and may be terminated by Phoenix Educational
          Institute Private Limited at any time. Upon terminating your viewing
          of these materials or upon the termination of this license, you must
          destroy any downloaded materials in your possession whether in
          electronic or printed format.
        </p>

        <h2 className="text-xl font-semibold">2. Disclaimer</h2>
        <p>
          a.) The materials on this website are provided on an ‘as is’ basis.
          Phoenix Educational Institute Private Limited makes no warranties,
          expressed or implied, and disclaims all other warranties including,
          without limitation, implied warranties of merchantability, fitness for
          a particular purpose, or non-infringement.
        </p>
        <p>
          b.) Phoenix Educational Institute Private Limited does not warrant or
          make any representations concerning the accuracy, likely results, or
          reliability of the use of the materials or on any sites linked to this
          site.
        </p>

        <h2 className="text-xl font-semibold">3. Limitations</h2>
        <p>
          In no event shall Phoenix Educational Institute Private Limited or its
          suppliers be liable for any damages (including, without limitation,
          loss of data or profit, or business interruption) arising from the use
          or inability to use the materials on the website, even if the company
          has been notified orally or in writing of the possibility of such
          damage.
        </p>

        <h2 className="text-xl font-semibold">4. Accuracy of Materials</h2>
        <p>
          The materials on this website could include technical, typographical,
          or photographic errors. Phoenix Educational Institute Private Limited
          does not warrant that any of the materials are accurate, complete, or
          current. The company may make changes to the materials at any time
          without notice but does not commit to updating them.
        </p>

        <h2 className="text-xl font-semibold">5. Links</h2>
        <p>
          Phoenix Educational Institute Private Limited is not responsible for
          the contents of any linked site. Inclusion of any link does not imply
          endorsement. Use of any such linked website is at the user's own risk.
        </p>

        <h2 className="text-xl font-semibold">6. Modifications</h2>
        <p>
          Phoenix Educational Institute Private Limited may revise these terms
          of service at any time without notice. By using this website, you
          agree to be bound by the then-current version of these terms.
        </p>

        <h2 className="text-xl font-semibold">7. Governing Law</h2>
        <p>
          These terms are governed by the laws of Uttar Pradesh, India, and you
          irrevocably submit to the exclusive jurisdiction of the courts in that
          state or location.
        </p>

        <footer className="pt-5 border-t text-sm text-gray-500">
          © 2025 SAT n paper | Phoenix Educational Institute Private Limited
        </footer>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
