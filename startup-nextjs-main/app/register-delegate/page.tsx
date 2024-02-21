"use client"
import Link from "next/link";
import React, {useState, useEffect} from "react";

const IndividualRegistrationPage = () => {

  useEffect(() => {
    localStorage.setItem('delegation', 'false');
  }, []);

  const [isApplyingForScholarship, setIsApplyingForScholarship] = useState(false);
  const [isWillingToParticipate, setIsWillingToParticipate] = useState(false);
  const [isQOneAnswered, setIsQOneAnswered] = useState(false);
  const [isQTwoAnswered, setIsQTwoAnswered] = useState(false);

  const showSecondQuestion = () => {
    document.getElementById("second-question-container").style.display = "block";
    setIsApplyingForScholarship(true);
    setIsQOneAnswered(true);
  }

  const hideSecondQuestion = () => {
    document.getElementById("second-question-container").style.display = "none";
    setIsApplyingForScholarship(false);
    setIsQOneAnswered(true);
    setIsQTwoAnswered(true);
  }

  const handleSecondQuestion = (bool) => {
    setIsWillingToParticipate(bool);
    setIsQTwoAnswered(true);
  }

  const handleAlert = () => {
    alert('Please fill in all required fields.');
  }

  const handleNext = () => {
    if (isApplyingForScholarship) {
      localStorage.setItem('scholarship', '1');
      if (isWillingToParticipate) {
        localStorage.setItem('participation', '1');
      } else {
        localStorage.setItem('participation', '0');
      }
    } else {
      localStorage.setItem('scholarship', '0');
    }
  }

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[700px] rounded bg-white px-6 py-10 sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl">
                  Delegate Registration Form
                </h3>
                <p className="mb-3 text-center text-base font-medium text-body-col">
                  Learn more about our scholarship benefits{" "}
                  <Link 
                    href='/pricing#scholarships'
                    className="text-red underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    here.
                  </Link>
                </p>
                <p className="mb-11 text-center text-base font-semibold text-body-col">
                  * Scholarships are only offered to national and international students. 
                </p>
                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full bg-body-color/50 sm:block"></span>
                </div>
                <form>
                  <div className="mb-8">
                  <div className="flex flex-col space-y-2 mb-8">
                  <label
                      htmlFor="scholarship-apply"
                      className="mb-3 block text-lg text-dark"
                    >
                      {" "}
                      Are you interested in applying for a scholarship?{" "}
                      <span className="text-trueRed">*</span>
                  </label>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="scholarship-yes" 
                      name="scholarship-options" 
                      onClick={showSecondQuestion}
                    />
                    <span className="cursor-pointer">Yes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="scholarship-no" 
                      name="scholarship-options" 
                      onClick={hideSecondQuestion}
                    />
                    <span className="cursor-pointer">No</span>
                  </div>
                  </div>
                  </div>
                  <div 
                    className="mb-8" 
                    id="second-question-container"
                    style={{display: "none"}}
                  >
                    <div className="flex flex-col space-y-2 mb-8">
                    <label
                        htmlFor="scholarship-apply"
                        className="mb-3 block text-lg text-dark"
                      >
                        {" "}
                        If not selected for a scholarship, would you still be interested in participating in BEYMUN?{" "}
                        <span className="text-trueRed">*</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="participation-yes" 
                        name="options" 
                        onClick={() => handleSecondQuestion(true)}
                      />
                      <span className="cursor-pointer">Yes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="participation-no" 
                        name="options" 
                        onClick={() => handleSecondQuestion(false)}
                      />
                      <span className="cursor-pointer">No</span>
                    </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    {isQOneAnswered && isQTwoAnswered ? (
                      <Link 
                        href={isApplyingForScholarship ? "/register-scholarship-info" : "/register-delegate-info"}
                        style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif', padding: "12px" }}
                        className="rounded-sm flex justify-center bg-red text-base font-semibold text-white duration-300 ease-in-out hover:bg-red/80"
                        onClick={handleNext}
                      >
                        Next
                      </Link> 
                    ) : (
                      <button 
                        style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif', padding: "12px" }}
                        className="w-full rounded-sm flex justify-center bg-red text-base font-semibold text-white duration-300 ease-in-out hover:bg-red/80"
                        onClick={handleAlert}
                      >
                        Next
                      </button> 
                    )}
                  </div> 
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default IndividualRegistrationPage;