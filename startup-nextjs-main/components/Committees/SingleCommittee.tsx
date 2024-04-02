import { Committee } from "@/types/committee";
import Link from "next/link";
import Image from "next/image";

const SingleCommittee = ({ committee }: { committee: Committee }) => {
  const { id, name, image } = committee;
  const imageSrc = image.toString();

  return (
    <div className="flex flex-wrap flex-col md:flex-row items-center -mx-4">
      <div className="px-4 mb-4">
        <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0" data-wow-delay=".15s">
          <Image 
            src={imageSrc} 
            alt="Committee Image" 
            className="drop-shadow-three" 
            style={{width: '150px'}} 
          />
        </div>
      </div>
      <div className="w-auto px-4">
        <div className="wow fadeInUp max-w-[550px]" data-wow-delay=".2s">
          <div className="mb-9 text-center">
            <Link href="/committees/[id]" as={`/committees/${id}`}>
              <a 
                className="mb-4 text-xl font-bold text-blue sm:text-2xl lg:text-xl xl:text-2xl hover:underline" 
                style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif' }}
              >
                {name}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCommittee;


