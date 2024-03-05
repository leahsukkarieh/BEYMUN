import Awards from "@/components/Awards/Awards";
import AwardsDetails from "@/components/Awards/AwardsDetails";
import CriteriaTable from "@/components/Awards/CriteriaTable";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { table1Data } from "@/components/Awards/table1Data";

import { Metadata } from "next";
import { table2Data } from "@/components/Awards/table2Data";
import { table3Data } from "@/components/Awards/table3Data";
import { table4Data } from "@/components/Awards/table4Data";
import { table5Data } from "@/components/Awards/table5Data";
import { table6Data } from "@/components/Awards/table6Data";

export const metadata: Metadata = {
  title: "Awards",
  description: "Awards and BEYMUN Recognition Guidelines",
};

const AwardsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="BEYMUN RECOGNITION GUIDELINES"
        description=""
      />
      <p className="container">
        The BEYMUN Recognition Guidelines aim to acknowledge and celebrate outstanding performance 
        and contributions by delegates, committee chairs, and delegations during the conference. 
        These guidelines foster a competitive yet constructive environment, encouraging diplomacy, 
        substantive knowledge, leadership, and teamwork among all participants. 
        The following awards will be presented at the BEYMUN conference:
      </p>
      <Awards />
      <AwardsDetails />
      <h1 className="text-center font-bold text-blue text-lg">Table of Criteria and Evaluation for the Best Chair Award:</h1>
      <CriteriaTable 
        criteriaTableData={table1Data} 
      />
      <h1 className="text-center font-bold text-blue text-lg">Table of Criteria and Evaluation for the Best Delegate Award:</h1>
      <CriteriaTable 
        criteriaTableData={table2Data} 
      />
      <h1 className="text-center font-bold text-blue text-lg">Table of Criteria and Evaluation for the Best Delegation Award: </h1>
      <CriteriaTable 
        criteriaTableData={table3Data} 
      />
      <h1 className="text-center font-bold text-blue text-lg">Table of Criteria and Evaluation for the Best Position Paper Award:  </h1>
      <CriteriaTable 
        criteriaTableData={table4Data} 
      />
      <h1 className="text-center font-bold text-blue text-lg">Table of Criteria and Evaluation for the Honorable Mention Certificates: </h1>
      <CriteriaTable 
        criteriaTableData={table5Data} 
      />
      <h1 className="text-center font-bold text-blue text-lg">Table of Criteria and Evaluation for the Verbal Commendation Certificates:</h1>
      <CriteriaTable 
        criteriaTableData={table6Data} 
      />
    </>
  );
};

export default AwardsPage;
