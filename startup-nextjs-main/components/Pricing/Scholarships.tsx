import SingleBenefit from "./SingleBenefit";
import { benefitData } from "./benefitsData";

const Scholarships = () => {
  return (
    <section id="scholarships">
    <div className="container h-full">
      <div className="h-full border-b-2 border-blue pb-5">
        <div className="-mx-4 flex flex-col items-center justify-center">
            <div className="mb-8 mt-8 md:mb-0 lg:mb-12 ml-4 md:ml-0 mr-4 md:mr-0">
            <h1 
              className="mb-5 text-2xl font-bold text-blue sm:text-3xl text-center"
              style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
            >
              Scholarships
            </h1>
            <p 
                className="text-base text-lg font-medium leading-relaxed text-blue text-center mt-4"
                style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
            >
                Our scholarships offer the following benefits.{" "}
                <span className="font-semibold underline">Apply now, spots are limited!</span>
            </p>
            <p className="text-blue">
              <span className="text-red text-md">*{" "}</span>
              Only independent delegates who are national or international students can apply.
            </p>
            <ul 
                className="text-md text-blue mt-4 font-medium"
                style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
            >
                {benefitData.map((benefit) => (
                    <SingleBenefit 
                    key={benefit.id}
                    benefit={benefit} 
                    />
                ))}
            </ul>
          </div>    
          </div>  
        </div>
      </div>
    </section>
  );
};

export default Scholarships;