import CustomSectionTitle from "../Common/CustomSectionTitle";
import committeesData from "../Member/committeesData";
import executivesData from "../Member/executivesData";
import finSponsorData from "../Member/finSponsorData";
import logisticsData from "../Member/logisticsData";
import mediaData from "../Member/mediaData";
import operationsData from "../Member/operationsData";
import relationsData from "../Member/relationsData";
import SingleMember from "../Member/SingleMember";

const AboutSectionTwo = () => {
  return (
    <section 
      className="h-auto py-14 md:py-18 lg:py-26"
      style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
    >
      <CustomSectionTitle
        title="MEET THE TEAMS!"
        paragraph=""
        center
      />
      <div className='container'>
      {executivesData.map((member) => (
        <div key={member.id} className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5">
            <SingleMember member={member} />
          </div>
        </div>
      ))}
      <h2 className="text-blue text-center font-semibold text-3xl mt-14">Operations Team</h2>
      <div className="-mx-4 flex flex-wrap justify-center">
            {operationsData.map((member) => (
              <div
                key={member.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
              >
                <SingleMember member={member} />
              </div>
            ))}
      </div>
      <h2 className="text-blue text-center font-semibold text-3xl mt-14">Committees Team</h2>
      <div className="-mx-4 flex flex-wrap justify-center">
            {committeesData.map((member) => (
              <div
                key={member.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
              >
                <SingleMember member={member} />
              </div>
            ))}
      </div>
      <h2 className="text-blue text-center font-semibold text-3xl mt-14">Finance & Sponsorship Team</h2>
      <div className="-mx-4 flex flex-wrap justify-center">
            {finSponsorData.map((member) => (
              <div
                key={member.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
              >
                <SingleMember member={member} />
              </div>
            ))}
      </div>
      <h2 className="text-blue text-center font-semibold text-3xl mt-14">Faculty & Delegate Relations Team</h2>
      <div className="-mx-4 flex flex-wrap justify-center">
            {relationsData.map((member) => (
              <div
                key={member.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
              >
                <SingleMember member={member} />
              </div>
            ))}
      </div>
      <h2 className="text-blue text-center font-semibold text-3xl mt-14">Logistics & Development Team</h2>
      <div className="-mx-4 flex flex-wrap justify-center">
            {logisticsData.map((member) => (
              <div
                key={member.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
              >
                <SingleMember member={member} />
              </div>
            ))}
      </div>
      <h2 className="text-blue text-center font-semibold text-3xl mt-14">Media Team</h2>
      <div className="-mx-4 flex flex-wrap justify-center">
            {mediaData.map((member) => (
              <div
                key={member.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
              >
                <SingleMember member={member} />
              </div>
            ))}
      </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
