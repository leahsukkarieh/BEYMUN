import { Pricing } from "@/types/pricing";

const SinglePricing = ({ pricing }: { pricing: Pricing }) => {
  const { title, price } = pricing;
  return (
    <>
    <div
      className="wow fadeInUp hover:shadow-two group relative overflow-hidden rounded bg-gray-200 bg-opacity-75 shadow-one duration-300"
      data-wow-delay=".1s"
    >
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h1 
              className="mb-5 text-xl font-bold text-red sm:text-md text-center"
              style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
            >
              {title}
          </h1>
          <p 
              className="text-base text-lg font-medium leading-relaxed text-blue text-center"
              style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
          >
              Registration Price
          </p>
          <p 
              className="text-base text-lg font-semibold leading-relaxed text-blue text-center"
              style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
          >
            {price}
          </p>
          <p className="text-base text-lg font-medium leading-relaxed text-red text-center mt-2">Includes</p>
          <ul className="text-base text-md leading-relaxed text-blue text-center">
            <li>
              Conference Fees and Kit
            </li>
            <li>
              Breakfast and Lunch
            </li>
            <li>
              Access to the Social Night and Dinner
            </li>
            <li>
              Awards
            </li>
          </ul>
      </div>
    </div>
  </>
  );
};

export default SinglePricing;