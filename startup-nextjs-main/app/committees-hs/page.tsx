import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleCommittee from "@/components/Committees/SingleCommittee";
import hsCommitteeData from "@/components/Committees/hsCommitteeData";
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
            <div className="container flex-flex-col">
                {hsCommitteeData.map((committee, index) => (
                <div
                    key={committee.id}
                    className={`px-4 h-1/3 mb-8 ${index !== hsCommitteeData.length - 1 ? 'border-b-2 border-gray-300' : ''} ${index === 0? 'mt-6' : ''}`}
                    style={{width: "85%"}}
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