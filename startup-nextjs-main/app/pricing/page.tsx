import Breadcrumb from "@/components/Common/Breadcrumb";
import Packages from "@/components/Pricing/Packages";
import Scholarships from "@/components/Pricing/Scholarships";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "This is the Pricing Page",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pricing Information"
        description="The conference is open to National Students, International Students, and AUB Students. Read more about the packages below!"
      />
      <Packages />
      <Scholarships />
    </>
  );
};

export default PricingPage;