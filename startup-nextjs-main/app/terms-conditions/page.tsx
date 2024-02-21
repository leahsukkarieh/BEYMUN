import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "This is the Terms and Conditions Page",
};

const TermsConditionsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms and Conditions"
        description="Welcome to the BEYMUN website. These Terms and Conditions govern your use of our website. By accessing or using our website, you agree to comply with these Terms and Conditions."
      />
     <section id="terms-conditions" className="py-10 md:py-14 lg:py-22">
        <div className="container">
          <ul>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">1.{" "}Intellectual Property Rights:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                    <span className='font-semibold'>Ownership:{" "}</span>
                    All content, logos, trademarks, and materials on 
                    the BEYMUN website are the property of BEYMUN or its licensors 
                    and are protected by intellectual property laws.
                </li>
                <li>
                    <span className='font-semibold'>Use of Content:{" "}</span>
                    You may access and view the content on our website 
                    for personal, non-commercial use only. Any unauthorized use, 
                    reproduction, or distribution of our content is strictly prohibited.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">2.{" "}User Conduct:</span>
              <p className='font-semibold'>You agree not to:</p>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                  Use our website for any unlawful or prohibited purpose.
                </li>
                <li>
                  Interfere with the functionality or security of our website.
                </li>
                <li>
                  Upload, transmit, or distribute any harmful or malicious content.
                </li>
                <li>
                  Engage in any activity that violates the rights of others.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">3.{" "}Registration and Account Security:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                  If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </li>
                <li>
                  You agree to provide accurate, current, and complete information during the registration process and to update your information promptly if there are any changes.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">4.{" "}Links to Third-Party Websites:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                  Our website may contain links to third-party websites for your convenience. We do not endorse or control these websites and are not responsible for their content, privacy practices, or terms of use.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">5.{" "}Disclaimer of Warranties:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                  While we strive to provide accurate and up-to-date information, we do not warrant the accuracy, completeness, or reliability of any content on our website. Your use of our website is at your own risk.
                </li>
                <li>
                  We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">6.{" "}Limitation of Liability:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                  In no event shall BEYMUN or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of our website.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">7.{" "}Indemnification:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                  You agree to indemnify and hold BEYMUN and its affiliates, officers, directors, employees, and agents harmless from any claims, losses, damages, liabilities, and expenses, including legal fees, arising out of your use of our website or your violation of these Terms and Conditions.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">8.{" "}Governing Law and Jurisdiction:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                  These Terms and Conditions shall be governed by and construed in accordance with the policies of AUB without regard to its conflict of law principles.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">9.{" "}Changes to Terms and Conditions:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                  We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Any changes will be effective immediately upon posting on this page. Your continued use of our website after any such changes constitutes your acceptance of the new Terms and Conditions.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <span className="font-bold text-blue text-md">10.{" "}Contact Us:</span>
              <ul className="ml-4" style={{listStyleType: 'disc'}}>
                <li>
                  If you have any questions or concerns about these Terms and Conditions, please contact us at beymun@aub.edu.lb
                </li>
              </ul>
            </li>
          </ul>
          <p>
            By using the BEYMUN website, you agree to abide by these Terms and Conditions. 
            If you do not agree with any part of these Terms and Conditions, 
            you should not use our website.
          </p>
        </div>
    </section>
    </>
  );
};

export default TermsConditionsPage;