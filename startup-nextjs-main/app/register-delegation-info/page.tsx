"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const AdvisorRegistrationPage = () => {

  const [advisorID, setAdvisorID] = useState(null);
  const [checkbox, setCheckbox] = useState(null);
  const [numberDelegates, setNumberDelegates] = useState(0);

  useEffect(() => {
    setCheckbox(document.getElementById('checkboxLabel') as HTMLInputElement);
  }, [checkbox]);

  useEffect(() => {
    const lastDelegateId = parseInt(localStorage.getItem('delegate_id'));
    const initialDelegateId = parseInt(localStorage.getItem('initial_delegate_id'));
    setNumberDelegates(lastDelegateId - initialDelegateId + 1);
  }, [numberDelegates]);

  const [formData, setFormData] = useState({
    number_delegates: numberDelegates,
    f_name: "",
    m_name: "",
    l_name: "",
    email: "",
    country_code: "",
    phone_number: "",
  });

  const handleAdvisorIdChange = (e) => {
    setAdvisorID(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.f_name || !formData.l_name || !formData.email || !formData.country_code || !formData.phone_number) {
      alert('Please fill in all required fields.');
      return;
  }

  // Check if advisorID is not selected
  if (!advisorID) {
      alert('Please upload a copy of your Passport/National ID.');
      return;
  }

  //check if agreed to terms and conditions

  if (!checkbox.checked) {
    alert('Please agree to the Terms and Conditions.')
    return;
  }

    const phone = `${formData.country_code}-${formData.phone_number}`;
    const completeData = {...formData, phone};
    delete completeData.country_code;
    delete completeData.phone_number;

    try {
      const response = await fetch('http://localhost:5000/api/delegation/post-delegation', {
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
      window.location.href = "/receipt-delegation";
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error.message);
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const delegationID = localStorage.getItem('delegation_id');
    const fileData = new FormData();
    fileData.append('file', advisorID);
    fileData.append('id', delegationID);
    fileData.append('fileType', 'advisorNationalID');

    try {
      await axios.post('http://localhost:5000/api/upload', fileData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
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
                  Delegation Advisor Information
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-col">
                  Kindly fill in the required information for your delegation{"'"}s advisor.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-8 flex items-center justify-center">
                    <span className="hidden h-[1px] w-full bg-body-color/50 sm:block"></span>
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="advisor-name"
                      className="mb-3 block text-lg text-dark"
                    >
                      {" "}
                      Full Name{" "}
                      <span className="text-trueRed">*</span>
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        name="f_name"
                        value={formData.f_name}
                        placeholder="First Name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary mr-5"
                        required
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="l_name"
                        value={formData.l_name}
                        placeholder="Last Name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-8 w-1/2">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-lg text-dark"
                    >
                      {" "}
                      Email{" "}
                      <span className="text-trueRed">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="example@example.com"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-8 w-2/3">
                    <label
                      htmlFor="phone-number-full"
                      className="mb-3 block text-lg text-dark"
                    >
                      {" "}
                      Phone Number{" "}
                      <span className="text-trueRed">*</span>
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        name="country_code"
                        value={formData.country_code}
                        placeholder="+961"
                        className="border-stroke w-1/3 rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary mr-5"
                        required
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="phone_number"
                        value={formData.phone_number}
                        placeholder="3 123 456"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-8">
                    <label htmlFor="advisor-id" className="mb-3 block text-lg text-dark">
                      Upload a copy of your Passport/National ID.
                      <span className="text-trueRed">*</span>
                    </label>
                    <p className="text-sm font-normal text-blue mb-2">* Accepted file type: PDF</p>
                    <input
                      type="file"
                      id="advisor-id"
                      name="advisor-id"
                      accept='.pdf'
                      required
                      onChange={handleAdvisorIdChange}
                    />
                    <button onClick={handleFileUpload} className="block bg-red text-white py-2 px-4 mt-4 rounded-lg hover:bg-red/80 transition duration-300">
                        Upload File
                    </button>
                  </div>
                  <div className="mb-8 flex">
                    <label
                      htmlFor="checkboxLabel"
                      className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabel"
                          className="sr-only"
                          required
                        />
                        <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20">
                          <span className="opacity-0">
                            <svg
                              width="11"
                              height="8"
                              viewBox="0 0 11 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                fill="#3056D3"
                                stroke="#3056D3"
                                strokeWidth="0.4"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <span>
                        By submitting this form, you agree to the
                        <a href="/terms-conditions" target="_blank" rel="noopener noreferrer" className="text-red hover:underline">
                          {" "}
                          Terms and Conditions{""}
                        </a>
                        , and our
                        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-red hover:underline">
                          {" "}
                          Privacy Policy{" "}
                        </a>
                      </span>
                    </label>
                  </div>
                  <div className="mb-6">
                    <button 
                      type='submit'
                      className="shadow-submit flex w-full items-center justify-center rounded-sm bg-red px-9 py-4 text-base font-medium text-white duration-300 hover:bg-red/90"
                      onClick={handleSubmit}
                      >
                      Next
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

export default AdvisorRegistrationPage;