import React from "react";

const Page = () => {
  return (
    <div className="p-10 bg-muted-light text-foreground font-sans leading-relaxed">
      {/* Header updated with primary theme color */}
      <header className="text-center mb-5">
        <h1 className="text-4xl font-bold m-0 text-primary">Privacy Policy</h1>
        <p className="text-base text-muted-foreground">Last Updated: 04-06-2025</p>
      </header>

      <section className="bg-background p-5 rounded-lg shadow-md">
        <p className="text-foreground">
          Your privacy is important to us. It is Phoenix Educational Institute
          Private Limited’s policy to respect your privacy regarding any
          information we may collect from you across our HRMS tool Zupians, our
          website at{" "}
          <a
            href="https://satnpaper.com/"
            className="text-link underline hover:text-link-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://satnpaper.com/
          </a>
          , and other sites we own and operate.
        </p>

        <p className="mt-4 text-foreground">
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </p>

        <p className="mt-4 text-foreground">
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorized access, disclosure, copying, use, or
          modification.
        </p>

        <p className="mt-4 text-foreground">
          We don’t share any personally identifying information publicly or with
          third parties, except when required to by law.
        </p>

        <p className="mt-4 text-foreground">
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and practices
          of these sites, and cannot accept responsibility or liability for
          their respective privacy policies.
        </p>

        <p className="mt-4 text-foreground">
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </p>

        <p className="mt-4 text-foreground">
          Your continued use of our products or website will be regarded as
          acceptance of our practices around privacy and personal information.
          If you have any questions about how we handle user data and personal
          information, feel free to contact us.
        </p>
      </section>
    </div>
  );
};

export default Page;
