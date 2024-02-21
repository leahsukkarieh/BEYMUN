import SingleRegister from "@/components/Register/SingleRegister";
import registerData from "@/components/Register/registerData";
import CustomSectionTitle from "@/components/Common/CustomSectionTitle";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "This is the Registration Page",
};

const RegisterPage = () => {
    return (
        <>
          <section className="pb-[120px] pt-[120px]">
            <div className="mb-8 flex items-center justify-center">
                <span className="hidden h-[1px] w-full bg-body-color/50 sm:block"></span>
            </div>
            <CustomSectionTitle
                title="REGISTRATION"
                paragraph=""
                center
            />
            <div className="flex items-center justify-center">
                <span className="hidden h-[1px] w-full bg-body-color/50 sm:block"></span>
            </div>
            <div 
                className="container"
                style={{marginTop: "100px"}}
            >
              <div className="-mx-4 flex flex-wrap justify-center">
                {registerData.map((register) => (
                  <div
                    key={register.id}
                    className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                  >
                    <SingleRegister register={register} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      );
    };

export default RegisterPage;