import { Value } from "@/types/value";

const AboutValue = ({ value }: { value: Value }) => {
  const { title, description } = value;
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two group relative overflow-hidden rounded bg-gray-200 bg-opacity-75 shadow-one duration-300"
        data-wow-delay=".1s"
      >
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
            <h1 
                className="mb-5 text-lg font-bold text-red sm:text-md text-center"
                style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
              >
                {title}
            </h1>
            <p 
                className="text-base text-md font-medium leading-relaxed text-blue text-justify"
                style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
            >
                {description}
            </p>
        </div>
      </div>
    </>
  );
};

export default AboutValue;