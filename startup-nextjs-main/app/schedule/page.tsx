import Breadcrumb from "@/components/Common/Breadcrumb";
import ScheduleDayOne from "@/components/Schedule/ScheduleDayOne";
import ScheduleDayThree from "@/components/Schedule/ScheduleDayThree";
import ScheduleDayTwo from "@/components/Schedule/ScheduleDayTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
  description: "BEYMUN Conference Schedule",
};

const SchedulePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Schedule"
        description="The conference will cover 3 days: April 13, 14, and 15. Check out the schedule below."
      />
      <div 
        className="container mx-auto px-20 mb-8"
        style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
      >
      <h2 className="text-lg font-semibold mb-4 text-blue">Saturday, April 13</h2>
        <ScheduleDayOne />
      </div>
      <div 
        className="container mx-auto px-20 mb-8"
        style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
      >
      <h2 className="text-lg font-semibold mb-4 text-blue">Sunday, April 14</h2>
        <ScheduleDayTwo />
      </div>
      <div 
        className="container mx-auto px-20 mb-8"
        style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
      >
      <h2 className="text-lg font-semibold mb-4 text-blue">Monday, April 15</h2>
        <ScheduleDayThree />
      </div>
    </>
  );
};
export default SchedulePage;