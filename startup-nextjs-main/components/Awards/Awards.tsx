import SingleAward from "./SingleAward";
import awardsData from "./awardsData";

const Awards = () => {
  return (
    <>
      <section id="award" className="py-7 md:py-9 lg:py-19">
        <div className="container">
            {awardsData.map((award) => (
                <SingleAward key={award.id} award={award}/>
            ))}
        </div>
      </section>
    </>
  );
};

export default Awards;