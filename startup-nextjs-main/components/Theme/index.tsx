import SectionTitle from "../Common/SectionTitle";

const Theme = () => {
  return (
    <>
      <section id="theme" className="py-16 md:py-20 lg:py-28">
        <div 
          className="container flex flex-col justify-center items-center"
          style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif' }}
          >
          <SectionTitle
            title="RISE LIKE A PHOENIX"
            paragraph="Our conference's theme centers around the core values of 
            strength, resilience, and peace."
            center
            mb="25px"
          />
          <div 
                className='flex flex-col justify-center items-center'
            >      
            <video controls autoPlay loop style={{width: "100%", height: "100%"}}>
                <source src="/phoenix-blue.mp4" type="video/mp4" />
                Your browser does not support this content type.
            </video>    
          </div>
        </div>
      </section>
    </>
  );
};

export default Theme;
