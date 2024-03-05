import { Award } from "@/types/award";

const SingleAward = ({ award }: { award: Award }) => {
    const { id, title, criteria, process} = award;
    return (
      <>
      <div className="mt-8">
        <p className='font-lg font-bold text-blue'>
            {id}{". "}{title}
        </p>
        <p className='font-md text-red italic mt-2'>
            Criteria:
        </p>
        <p className='font-md text-black mt-1'>
            {criteria.map((criterion, index) => (
                <li key={index} style={{listStyleType: 'disc'}}>{criterion}</li>
            ))}
        </p>
        <p className='font-md text-red italic mt-2'>
            Selection Process:
        </p>
        <p className='font-md text-black mt-1'>
            {process.map((step, index) => (
                <li key={index} style={{listStyleType: 'disc'}}>{step}</li>
            ))}
        </p>
    </div>
    </>
    );
  };
  
  export default SingleAward;