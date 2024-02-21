import Breadcrumb from "@/components/Common/Breadcrumb";
// import ScheduleDayOne from "@/components/Schedule/ScheduleDayOne";
// import ScheduleDayThree from "@/components/Schedule/ScheduleDayThree";
// import ScheduleDayTwo from "@/components/Schedule/ScheduleDayTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
  description: "This is the Schedule Page",
};

const SchedulePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Schedule"
        description="Stay tuned!"
      />
      {/* <div 
        className="container mx-auto px-20 mb-8"
        style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
      >
      <h2 className="text-lg font-semibold mb-4 text-blue">Friday, April 19</h2>
        <ScheduleDayOne />
      </div>
      <div 
        className="container mx-auto px-20 mb-8"
        style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
      >
      <h2 className="text-lg font-semibold mb-4 text-blue">Saturday, April 20</h2>
        <ScheduleDayTwo />
      </div>
      <div 
        className="container mx-auto px-20"
        style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
      >
      <h2 className="text-lg font-semibold mb-4 text-blue">Sunday, April 21</h2>
        <ScheduleDayThree />
      </div> */}
    </>
  );
};
export default SchedulePage;