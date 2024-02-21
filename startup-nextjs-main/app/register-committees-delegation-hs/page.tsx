"use client"
import  hsCommitteeData  from "@/components/Committees/hsCommitteeData";
import Link from "next/link";
import { useState } from "react";

const saveFormDataToLocalstorage = (formData) => {
  const formDataJson = JSON.stringify(formData);
  localStorage.setItem('committeeSelection', formDataJson);
};


const combineData = () => {
  const scholarshipInfo = {
    scholarship: 0,
    participation: 0,
  };
  const delegateInfo = JSON.parse(localStorage.getItem('delegateQuestions'));
  const committeeSelectionInfo = JSON.parse(localStorage.getItem('committeeSelection'));
  const delegationId = {
    delegation_id: localStorage.getItem('delegation_id'),
  }
  const inidividualDelegate = {
    individual_delegate: 0 
  };
  localStorage.setItem('delegation_id', delegationId.delegation_id)
  return {...scholarshipInfo, ...delegateInfo, ...committeeSelectionInfo, ...inidividualDelegate, ...delegationId}

}

const HsCommitteeSelectionDelegationPage = () => {

  const [formData, setFormData] = useState({
    first_choice: "",
    second_choice: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e, button) => {
    e.preventDefault();
    if (!formData.first_choice || !formData.second_choice) {
      alert('Please select both committee choices.');
      return;
    }
    saveFormDataToLocalstorage(formData);
    const completeData = combineData();

    try {
      const response = await fetch('http://localhost:5000/api/delegate/post-delegate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(completeData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Handle successful form submission
      console.log('Form submitted successfully');
      button === 'next' ? window.location.href = "/register-individual-delegate" : window.location.href = "/register-delegation-info";
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[700px] rounded bg-white px-6 py-10 sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl">
                  Committee Selection
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-col">
                  Please indicate your committee preferences. While we aim to accommodate your preferences, 
                  we reserve the right to assign you to a committee not listed here.
                  Learn more about our committees {" "}
                  <Link 
                    href='/committees-hs'
                    className="text-red underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    here.
                  </Link>
                </p>
                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full bg-body-color/50 sm:block"></span>
                </div>
                <form>
                    <div className="mb-8">
                        <label
                        htmlFor="first_choice"
                        className="mb-3 block text-lg text-dark"
                        >
                        {" "}
                        First Choice{" "}
                        <span className="text-trueRed">*</span>
                        </label>
                        <select
                          name="first_choice"
                          value={formData.first_choice}
                          onChange={handleChange}
                          defaultValue = ""
                        >
                        <option style={{ fontSize: '16px', padding: '8px 12px' }} value="" disabled selected>Select First Choice</option>
                          {hsCommitteeData.map((committee, index) => (
                            <option key={committee.id} value={committee.name} style={{ fontSize: '16px', padding: '8px 12px' }} disabled={formData.second_choice === committee.name}>{committee.name}</option>
                          ))} 
                        </select>
                    </div>
                    <div className="mb-8">
                        <label
                        htmlFor="second_choice"
                        className="mb-3 block text-lg text-dark"
                        >
                        {" "}
                        Second Choice{" "}
                        <span className="text-trueRed">*</span>
                        </label>
                        <select
                          name="second_choice"
                          value={formData.second_choice}
                          onChange={handleChange}
                          defaultValue = ""
                        >
                        <option style={{ fontSize: '16px', padding: '8px 12px' }} value="" disabled selected>Select Second Choice</option>
                          {hsCommitteeData.map((committee, index) => (
                            <option key={committee.id} value={committee.name} style={{ fontSize: '16px', padding: '8px 12px' }} disabled={formData.first_choice === committee.name}>{committee.name}</option>
                          ))} 
                        </select>
                    </div>
                  <div className="mb-6 flex justify-end">
                    <button 
                      style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif', padding: "12px 20px" }}
                      className="rounded-sm flex justify-center bg-red text-base font-semibold text-white duration-300 ease-in-out hover:bg-red/80"
                      onClick={(e) => handleSubmit (e, 'next')}
                    >
                      Next
                    </button> 
                    <button 
                      style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif', padding: "12px 20px", marginLeft: "12px" }}
                      className="rounded-sm flex justify-center bg-red text-base font-semibold text-white duration-300 ease-in-out hover:bg-red/80"
                      onClick={(e) => handleSubmit (e, 'done')}
                    >
                      Done
                    </button> 
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

export default HsCommitteeSelectionDelegationPage;