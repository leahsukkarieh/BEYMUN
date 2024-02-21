import AboutValue from "./AboutValue";
import aboutData from "./aboutData";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-10 md:pt-14 lg:pt-22">
      <div className="container h-full">
        <div className="h-full border-b-2 border-blue md:pb-4 lg:pb-10">
          <div className="-mx-4 flex flex-col items-center justify-center">
          <div className="border-t-2 border-red/80 w-3/4 justify-center"></div>
            <div className="mb-8 mt-8 max-w-[570px] md:mb-0 lg:mb-12">
              <h1 
                className="mb-5 text-2xl font-bold text-blue sm:text-3xl text-center"
                style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
              >
                Purpose
              </h1>
              <p 
                className="text-base font-medium leading-relaxed text-black text-justify"
                style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
              >
                BEYMUN is an annual Model United Nations conference held on the premises of the 
                American University of Beirut (AUB). Its primary objectives are to foster a strong MUN culture, 
                promote student participation in recreational, social, and cultural activities, 
                develop organizational skills, and cultivate ethical and transparent interactions.
              </p>
            </div>
            <div className="border-b-2 border-red/80 w-3/4 justify-center"></div>
            <div className="mb-8 mt-8 max-w-[570px] md:mb-0 lg:mb-12">
              <h1 
                className="mb-5 text-2xl font-bold text-blue sm:text-3xl text-center"
                style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
              >
                Mission Statement
              </h1>
              <p 
                className="text-base font-medium leading-relaxed text-black text-justify"
                style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
              >
                BEYMUN aims to provide an inclusive and enriching platform for students to 
                engage in diplomatic simulations, enhance their public speaking and negotiation skills, 
                and gain a deeper understanding of global issues. By encouraging teamwork, critical thinking, 
                and respectful dialogue, we aspire to empower future leaders to effect positive change in 
                their communities and beyond.
              </p>
            </div>
            <div className="border-b-2 border-red/80 w-3/4 justify-center"></div>
            <div className="mb-8 mt-8 md:mb-0 lg:mb-12">
              <h1 
                className="mb-5 text-2xl font-bold text-blue sm:text-3xl text-center"
                style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
              >
                Core Values
              </h1>
              <div className="flex flex-col sm:flex-row">
                {aboutData.map((value) => (
                    <div
                      key={value.id}
                      className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                    >
                      <AboutValue value={value} />
                    </div>
                  ))}
              </div>
            </div>  
            <div className="border-b-2 border-red/80 w-3/4 justify-center"></div>
          </div>
        </div>
      </div>
  </section>
  );
};

export default AboutSectionOne;
