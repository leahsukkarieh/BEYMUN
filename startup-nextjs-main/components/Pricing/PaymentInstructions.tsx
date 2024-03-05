import CustomVideoPlayer from "../VideoPlayer";

const PaymentInstructions = () => {
  return (
    <section id="PaymentInstructions">
    <div className="container h-full">
      <div className="h-full border-b-2 border-blue pb-5">
        <div className="-mx-4">
            <div className="mb-8 mt-8 md:mb-0 lg:mb-12 flex justify-around">
                <div className="ml-3">
                    <h1 
                        className="mb-5 text-3xl font-bold text-blue sm:text-3xl text-center"
                        style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
                    >
                        Payment Instructions
                    </h1>
                    <p 
                        className="text-base text-lg font-medium leading-relaxed text-center text-blue mt-4"
                        style={{fontFamily: "Libre Franklin, Helios Extended, sans-serif"}}
                    >
                        Pay through WHISH money to complete your registration. 
                        Watch the tutorial to guide you through the process.
                    </p>
                </div>
            <div>
                <CustomVideoPlayer src="/paymentInstructions.mp4" />
            </div>
          </div>    
          </div>  
        </div>
      </div>
    </section>
  );
};

export default PaymentInstructions;