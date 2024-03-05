import Link from "next/link";

const HomeContent = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-blue pb-16 pt-[90px] md:pb-[120px] md:pt-[120px] xl:pb-[160px] xl:pt-[150px] 2xl:pb-[170px] 2xl:pt-[180px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 
                  className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                  style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif' }}
                >
                  BEYMUN 2024
                </h1>
                <p 
                  className="text-white font-normal mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl"
                  style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif' }}
                >
                 The 9th edition of the Beirut Model United Nations (BEYMUN)
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://forms.gle/6ey6vjWWZUfADoySA"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif' }}
                    className="rounded-sm bg-primary mb-8 px-8 py-4 text-base font-semibold text-red duration-300 ease-in-out hover:bg-primary/80"
                  >
                    REGISTER NOW
                  </Link>
                  <div style={{marginLeft: 0}}>
                    <span 
                      className="text-white font-medium text-center text-xl md:text-lg sm:text-lg"
                      style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif' }}
                    >
                      Learn about our
                    </span>
                   <Link
                    href="/pricing#scholarships"
                    style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif' }}
                    className="px-2 py-4 mr-1 text-base text-center underline font-medium text-xl text-primary duration-300 ease-in-out hover:text-primary/80 md:text-lg sm:text-lg"
                  >
                    scholarship opportunities!
                  </Link> 
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
