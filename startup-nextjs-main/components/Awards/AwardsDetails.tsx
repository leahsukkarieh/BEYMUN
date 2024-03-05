const AwardsDetails = () => {
  return (
    <>
      <section id="details" className="py-7 md:py-9 lg:py-19">
        <div className="container">
            <h1 className="text-2xl font-bold text-blue mb-4 border-b-2 border-red">
                Award Presentation:
            </h1>
            <ul>
                <li style={{listStyleType: 'disc'}}>
                    The Recognition Ceremony will be held during the closing ceremony to 
                    honor recipients of all awards.
                </li>
                <li style={{listStyleType: 'disc'}}>
                    Overall Outstanding Delegate, Best Delegate, Best Committee Chair, 
                    Best Position Paper and Best Delegation recipients will receive certificates and medals.
                </li>
                <li style={{listStyleType: 'disc'}}>
                    Honorable Mention and Verbal Commendation recipients will receive certificates 
                    during the ceremony.
                </li>
            </ul>
        </div>
        <div className="container mt-6">
            <h1 className="text-2xl font-bold text-blue mb-4 border-b-2 border-red">  
                Confidentiality and Impartiality:
            </h1>
            <ul>
                <li style={{listStyleType: 'disc'}}>
                    The recognition process remains confidential, and delegates{"'"} 
                    identities are not disclosed during deliberations.
                </li>
                <li style={{listStyleType: 'disc'}}>
                    Recognition decisions are based on objective assessments and committee staff input, 
                    ensuring impartiality.
                </li>
            </ul>
        </div>
        <div className="container mt-6">
            <h1 className="text-2xl font-bold text-blue mb-4 border-b-2 border-red">  
                No Appeal Process:
            </h1>
            <ul>
                <li style={{listStyleType: 'disc'}}>
                    There will be no appeal process for recognition decisions to maintain the 
                    integrity and impartiality of the evaluation.
                </li>
            </ul>
        </div>
      </section>
    </>
  );
};

export default AwardsDetails;