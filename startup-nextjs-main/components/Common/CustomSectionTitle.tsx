const SectionTitle = ({
    title,
    paragraph,
    width = "570px",
    center,
    mb = "8px",
  }: {
    title: string;
    paragraph: string;
    width?: string;
    center?: boolean;
    mb?: string;
  }) => {
    return (
      <>
        <div
          className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
          data-wow-delay=".1s"
          style={{ maxWidth: width, marginBottom: mb }}
        >
          <h2 
            className="mb-4 text-3xl font-bold !leading-tight text-blue sm:text-4xl md:text-[45px]"
            style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
          >
            {title}
          </h2>
          <p 
            className="text-base !leading-relaxed text-black md:text-lg"
            style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
          >
            {paragraph}
          </p>
        </div>
      </>
    );
  };
  
  export default SectionTitle;
  