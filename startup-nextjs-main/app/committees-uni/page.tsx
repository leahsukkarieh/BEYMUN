import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleCommittee from "@/components/Committees/SingleCommittee";
import { Metadata } from "next";
import { uniCommitteeData } from "@/components/Committees/uniCommittees/uniCommitteesData";

export const metadata: Metadata = {
  title: "University Committees",
  description: "BEYMUN Committees for University Delegates",
};

const uniCommitteesPage = () => {
  return (
    <>
        <Breadcrumb
            pageName="University Committees"
            description=""
        />
        <section>
            <div className="container flex-flex-col">
                {uniCommitteeData.map((committee, index) => (
                <div
                  key={committee.id}
                  className={`px-4 py-8 h-1/3 w-full md:w-5/6 mb-8 ${index !== uniCommitteeData.length - 1 ? 'border-b-2 border-gray-300' : ''}`}
                >
                  <SingleCommittee committee={committee} />
                </div>
                ))} 
            </div>
        </section>
    </>
  );
};

export default uniCommitteesPage;