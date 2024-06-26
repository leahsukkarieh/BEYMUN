import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleCommittee from "@/components/Committees/SingleCommittee";
import hsCommitteeData from "@/components/Committees/hsCommittees/hsCommitteeData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "High School Committees",
  description: "BEYMUN Committees for High School Delegates",
};

const hsCommitteesPage = () => {
  return (
    <>
        <Breadcrumb
            pageName="High School Committees"
            description=""
        />
        <section>
            <div className="container flex-flex-col items-center">
                {hsCommitteeData.map((committee, index) => (
                <div
                  key={committee.id}
                  className={`px-4 h-1/3 w-full md:w-5/6 mb-8 ${index !== hsCommitteeData.length - 1 ? 'border-b-2 border-gray-300' : ''} ${index === 0? 'mt-6' : ''}`}
                >
                  <SingleCommittee committee={committee} />
                </div>
                ))} 
            </div>
        </section>
    </>
  );
};

export default hsCommitteesPage;