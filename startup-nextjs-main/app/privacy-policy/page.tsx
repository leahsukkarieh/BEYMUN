import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BEYMUN Privacy Policy",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="At BEYMUN, we are committed to protecting the privacy and security of our users' personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to safeguard your data."
      />
     <section id="privacy-policy" className="py-10 md:py-14 lg:py-22">
        <div className="container">
          <ul>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">1.{" "}Information We Collect:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                    <span className='font-semibold'>Personal Information: {" "}</span>
                    When you register or interact with our website, we may collect personal 
                    information such as your name, email address, phone number, and any 
                    other information you provide voluntarily.
                </li>
                <li>
                    <span className='font-semibold'>Usage Data: {" "}</span>
                    We may collect information about how you interact with our website, 
                    including IP addresses, browser types, pages visited, and other analytical data.
                </li>
                <li>
                    <span className='font-semibold'>Cookies:  {" "}</span>
                    We use cookies to enhance user experience, personalize content, and analyze site traffic. 
                    You can control cookies through your browser settings.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">2.{" "}How We Use Your Information:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                    <span className='font-semibold'>To Provide Services:{" "}</span>
                    We use the information collected to provide and maintain our services, process registrations, 
                    communicate with users, and facilitate participation in BEYMUN events.
                </li>
                <li>
                    <span className='font-semibold'>To Improve Our Services:{" "}</span>
                    We analyze usage data to improve our website, tailor content, and enhance user experience.
                </li>
                <li>
                    <span className='font-semibold'>To Communicate:{" "}</span>
                    We may use your contact information to send updates, newsletters, 
                    and promotional materials related to BEYMUN events and initiatives. 
                    You can opt-out of these communications at any time.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">3.{" "}Data Sharing and Disclosure:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
              <li>
                    <span className='font-semibold'>Third-Party Service Providers: {" "}</span>
                    We may share your information with trusted third-party service providers to facilitate our services, 
                    such as website hosting, analytics, and communication tools. 
                    These providers are contractually obligated to protect your information and 
                    only use it for specified purposes.
                </li>
                <li>
                    <span className='font-semibold'>Legal Compliance: {" "}</span>
                    We may disclose your information to comply with legal obligations, 
                    enforce our policies, or respond to legal requests.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">4.{" "}Data Security:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                    We implement security measures to protect your personal information from unauthorized 
                    access, alteration, disclosure, or destruction.
                </li>
                <li>
                    While we strive to safeguard your data, no method of transmission over the internet 
                    or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">5.{" "}Children{"'"}s Privacy:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                    Our website is not intended for children under the age of 13. 
                    We do not knowingly collect personal information from children under 13. 
                    If you believe we have inadvertently collected such information, please contact us to remove it.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">6.{" "}Changes to This Policy:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                    We reserve the right to update or modify this Privacy Policy at any time.
                     Any changes will be reflected on this page, and we encourage you to review this 
                     Policy periodically for updates.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">7.{" "}Contact Us:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                    If you have any questions or concerns about this Privacy Policy or our data practices, 
                    please contact us at beymun@aub.edu.lb
                </li>
              </ul>
            </li>
          </ul>
          <p>
            By using the BEYMUN website, you consent to the collection and use of your 
            information as outlined in this Privacy Policy.
          </p>
        </div>
    </section>
    </>
  );
};

export default PrivacyPolicyPage;