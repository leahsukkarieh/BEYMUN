import { Member } from "@/types/member";

const SingleMember = ({ member }: { member: Member }) => {
  const { name, position, image} = member;
  const imageSrc = image.toString();
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 flex flex-col items-center justify-center"
        data-wow-delay=".1s"
        style={{display: "flex", flexDirection: "column", alignItems: "center"}}
      >
        <img 
            src={imageSrc} 
            alt="image" 
            className="block aspect-[37/22]"
            style={{position: "relative", width: "220px", height: "220px", marginTop: "20px"}}
        />
        <div className="mt-4 mb-4 flex flex-col items-center justify-center">
          <h3 
            className="mb-4 block text-xl font-bold text-blue sm:text-2xl"
            style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
          >
            {name}
          </h3>
          <p 
            className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base text-center font-medium text-black wrap"
            style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
          >
            {position}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleMember;