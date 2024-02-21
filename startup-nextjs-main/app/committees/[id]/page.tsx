"use client"
import allCommitteeData from '@/components/Committees/allCommitteesData';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CommitteeDetails({ params }: { params: { id: number } }) {
  const router = useRouter();
  const committee = allCommitteeData.find(committee => committee.id.toString() === params.id.toString()) || null;
  if (!committee) {
    router.push('/error');
    return null;
  }
  return (
    <>
      <Breadcrumb
            pageName={committee.name}
            description=""
        />
        <section id='committee-details' className="py-4 md:py-8 lg:py-16">
            <div className="container flex-flex-col">
              <h2 className="text-red font-semibold text-3xl mb-8 border-b-2 border-primary py-2">{committee.topic}</h2>
              <p className='text-justify'>{committee.description}</p>
            </div>
            <h2 className="text-blue font-semibold text-2xl py-4 text-center mt-4">Chairs</h2>
            <div className='container lg:flex justify-center'>
              <div className="-mx-4 flex flex-wrap justify-center">
                <div className="w-full px-4 mt-5">
                <div
                  className="wow fadeInUp hover:shadow-two group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 flex flex-col items-center justify-center"
                  data-wow-delay=".1s"
                  style={{display: "flex", flexDirection: "column", alignItems: "center"}}
                >
                  <Image 
                      src={committee.chairpersonImg} 
                      alt="image" 
                      className="block aspect-[37/22]"
                      style={{position: "relative", width: "220px", height: "220px"}}
                      fill 
                  />
                  <div className="mt-4 mb-4 flex flex-col items-center justify-center">
                    <h3 
                      className="mb-4 block text-xl font-bold text-blue sm:text-2xl"
                      style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
                    >
                      {committee.chairperson}
                    </h3>
                    <p 
                      className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base text-center font-medium text-black wrap"
                      style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
                    >
                      Chairperson
                    </p>
                  </div>
                </div>
                </div>
              </div>
              <div className="-mx-4 flex flex-wrap justify-center">
                <div className="w-full px-4 mt-5">
                <div
                  className="wow fadeInUp hover:shadow-two group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 flex flex-col items-center justify-center"
                  data-wow-delay=".1s"
                  style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "30px"}}
                >
                  <Image 
                      src={committee.directorImg} 
                      alt="image" 
                      className="block aspect-[37/22]"
                      style={{position: "relative", width: "220px", height: "220px"}}
                      fill 
                  />
                  <div className="mt-4 mb-4 flex flex-col items-center justify-center">
                    <h3 
                      className="mb-4 block text-xl font-bold text-blue sm:text-2xl"
                      style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
                    >
                      {committee.director}
                    </h3>
                    <p 
                      className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base text-center font-medium text-black wrap"
                      style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
                    >
                      Director
                    </p>
                  </div>
                </div>
                </div>
              </div>
              <div className="-mx-4 flex flex-wrap justify-center">
                <div className="w-full px-4 ml mt-5">
                <div
                  className="wow fadeInUp hover:shadow-two group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 flex flex-col items-center justify-center"
                  data-wow-delay=".1s"
                  style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "30px"}}
                >
                  <Image 
                      src={committee.rapporteurImg} 
                      alt="image" 
                      className="block aspect-[37/22]"
                      style={{position: "relative", width: "220px", height: "220px"}}
                      fill 
                  />
                  <div className="mt-4 mb-4 flex flex-col items-center justify-center">
                    <h3 
                      className="mb-4 block text-xl font-bold text-blue sm:text-2xl"
                      style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
                    >
                      {committee.rapporteur}
                    </h3>
                    <p 
                      className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base text-center font-medium text-black wrap"
                      style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
                    >
                      Rapporteur
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
        </section>
    </>
  );
};