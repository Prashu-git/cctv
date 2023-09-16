import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />

      <div className="bg-white p-8 rounded-lg shadow-md elementor-widget-container mb-4">
        <h1 className="text-xl font-bold underline text-center">Privacy and Policy</h1>
        <br/>

        <p className="elementor-widget-container mb-4">
          At EYES, accessible from eyes.in, the privacy of our visitors is one of our primary concerns. This Privacy Policy outlines the types of information we collect and how we use it. By using our website, you agree to the terms of this Privacy Policy.
        </p>

        <h2 className="text-xl font-bold mb-4">Information We Collect:</h2>

        <ul className=" elementor-widget-container mb-4 ">
          <li>
            <p>
              <span className="font-bold ">Personal Information:</span> We may collect personal information such as your name, email address, phone number, company name, address, and other details when you provide them voluntarily. We will clearly indicate the reasons for collecting this information.
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">Communication Data:</span> If you contact us directly, we may receive additional information, including the contents of your messages and any attachments.
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">Log Files:</span> Like many other websites, EYES uses log files that include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and the number of clicks. This data is used for analyzing trends, administering the site, tracking user movement, and gathering demographic information. It is not personally identifiable.
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">Cookies and Web Beacons:</span> We use cookies to store information, such as your preferences and the pages you visit on our website. This helps us optimize your user experience by customizing our content based on your browser type and other information.
            </p>
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-4">How We Use Your Information:</h2>

        <ul className="list-disc elementor-widget-container mb-4 ">
          <li>
            <p>
              We use the information we collect in the following ways:
            </p>
          </li>
          <li>
            <p>
             Providing, operating, and maintaining our website.
            </p>
          </li>
          <li>
            <p>
              Improving, personalizing, and expanding our website.
            </p>
          </li>
          <li>
            <p>
              Understanding and analyzing how you use our website.
            </p>
          </li>
          <li>
            <p>
              Developing new products, services, features, and functionality.
            </p>
          </li>
          <li>
            <p>
             Communicating with you for customer service, updates, and marketing purposes.
            </p>
          </li>
          <li>
            <p>
              Sending you emails.
            </p>
          </li>
          <li>
            <p>
              Finding and preventing fraud
            </p>
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-4">Log Files and Third-Party Cookies:</h2>

        <p className="mb-4">
          EYES follows standard log file practices. Our website also uses cookies. Some of our third-party partners may use cookies, JavaScript, or Web Beacons to measure the effectiveness of their advertising campaigns and personalize the content you see on other websites.
        </p>

        <p className="mb-4">
          You have the option to disable cookies in your browser settings. For detailed information on managing cookies in specific web browsers, please visit the respective browser's website.
        </p>

        <h2 className="text-xl font-bold mb-4">Your Privacy Rights:</h2>

        <ul className="elementor-widget-container mb-4 ">
          <li>
            <p>
              <span className="font-bold">Access:</span> You have the right to request access to the personal data we hold about you.
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">Rectification:</span> You can request the correction of inaccurate or incomplete information.
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">Erasure:</span> You have the right to request the deletion of your personal data under certain conditions.
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">Restriction of Processing:</span> You can request the restriction of processing your personal data under certain conditions.
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">Objection to Processing:</span> You can object to our processing of your personal data under certain conditions.
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">Data Portability:</span> You have the right to request the transfer of your data to another organization under certain conditions.
            </p>
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-4">Children's Information:</h2>

        <p className="mb-4">
          EYES does not knowingly collect Personal Identifiable Information from children under the age of 13. If you believe your child has provided such information on our website, please contact us immediately, and we will make efforts to promptly remove it from our records.
        </p>

        <p className="mb-4">
          This Privacy Policy is specific to online activities on the EYES website and does not apply to offline activities or other channels.
        </p>

        <p className="mb-4">
          For questions or more information about our Privacy Policy, please contact us.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;
