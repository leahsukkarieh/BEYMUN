import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleFAQ from "@/components/Info/SingleFAQ";
import { infoData } from "@/components/Info/infoData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently Asked Questions & Useful Information",
};

const InfoPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Useful Information"
        description=""
      />
      <section id="faq" className="py-10 md:py-14 lg:py-22">
        <div className="container">
          <ul>
            {infoData.map((faq) => (
              <SingleFAQ key={faq.id} faq={faq} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default InfoPage;