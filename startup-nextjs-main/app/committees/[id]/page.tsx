"use client"
import allCommitteeData from '@/components/Committees/allCommitteesData';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { useRouter } from 'next/navigation';
import SingleMember from '@/components/Member/SingleMember';

export default function CommitteeDetails({ params }: { params: { id: number } }) {
  const router = useRouter();
  const committee = allCommitteeData.find(committee => committee.id.toString() === params.id.toString()) || null;
  if (!committee) {
    router.push('/error');
    return null;
  }
  const dias = committee.diasMembers;
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
            <div className='container'>
            <div className="-mx-4 flex flex-wrap justify-center">
              {dias.map((member) => (
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
    </>
  );
};