import { Register } from "@/types/register";
import Link from "next/link";

const SingleRegister = ({ register }: { register: Register }) => {
  const { title, ref } = register;
  const url = ref.toString();
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two group relative overflow-hidden bg-blue/80 shadow-one duration-300"
        data-wow-delay=".1s"
        style={{width: "400px", height: "180px"}}
      >
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3 
            className="mb-4 block text-lg font-bold text-white sm:text-2xl text-center"
            style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
          >
            {title}
          </h3>  
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href={url}
              style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif' }}
              className="rounded-sm bg-red px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-red/80"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleRegister;
