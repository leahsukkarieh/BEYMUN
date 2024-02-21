import SinglePricing from "./SinglePricing";
import pricingData from "./pricingData";

const Packages = () => {
  return (
    <section id="packages">
      <div 
        className="container"
        style={{padding: '60px 60px 20px 60px'}}
      >
        <div className="border-b-2 border-blue pb-10">
          <div className="flex flex-col items-center">
            <h1 className="mb-5 text-2xl font-bold text-blue sm:text-3xl text-center">
              Packages
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            {pricingData.map((pricing) => (
              <div key={pricing.id} className="w-full md:w-1/2 lg:w-1/3 px-4">
                <SinglePricing pricing={pricing} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;