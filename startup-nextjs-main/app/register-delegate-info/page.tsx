"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const saveFormDataToLocalstorage = (formData) => {
  // Set student_type based on the presence of school_name
  formData.student_type = formData.school_name === "" ? "university" : "high_school";

  const address = `${formData.address_country}, ${formData.address_city}, ${formData.address_street}, ${formData.address_building}`;
  const birthday = `${formData.birthday_day}-${formData.birthday_month}-${formData.birthday_year}`;
  const phone = `${formData.country_code}-${formData.phone_number}`;

  // Remove individual fields from formData
  delete formData.address_country;
  delete formData.address_city;
  delete formData.address_street;
  delete formData.address_building;
  delete formData.birthday_day;
  delete formData.birthday_month;
  delete formData.birthday_year;
  delete formData.country_code;
  delete formData.phone_number;
  delete formData.type;
  
  formData.address = address;
  formData.birthday = birthday;
  formData.phone = phone;
  const formDataJson = JSON.stringify(formData);
  localStorage.setItem('delegateQuestions', formDataJson);
};

const fetchLastDelegateId = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/delegate-id/last-delegate-id', {
      method: 'GET'
    });

    if (response.ok) {
      const data = await response.json();
      return data.lastDelegateId + 1;
    } else {
      console.error('Failed to fetch last delegate ID:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching last delegate ID:', error);
    return null;
  }
};

const DelegateInfoPage = () => {

  const [delegateId, setDelegateId] = useState('');
  const [navigateTo, setNavigateTo] = useState('');
  const [isHsStudent, setIsHsStudent] = useState(false);
  const [universityID, setUniversityID] = useState(null);
  const [nationalID, setNationalID] = useState(null);
  const [isStudentTypeFilled, setIsStudentTypeFilled] = useState(false);
  const [isNationalIdUploaded, setIsNationalIdUploaded] = useState(false);
  const [isUniversityIdUploaded, setIsUniversityIdUploaded] = useState(false);
  const [formData, setFormData] = useState({
    f_name: "",
    m_name: "",
    l_name: "",
    email: "",
    country_code: "",
    phone_number: "",
    address_country: "",
    address_city: "",
    address_street: "",
    address_building: "",
    birthday_day: "",
    birthday_month: "",
    birthday_year: "",
    student_type: "",
    school_name: "",
    university_name: ""
  });

  useEffect(() => {
    const getLastDelegateId = async () => {
      const lastDelegateId = await fetchLastDelegateId();
      if (lastDelegateId !== null) {
        setDelegateId(lastDelegateId);
        localStorage.setItem('delegate_id', lastDelegateId);
      }
    };
    getLastDelegateId();
  }, []);

  const handleUniversityIdChange = (e) => {
    setUniversityID(e.target.files[0]);
    setIsUniversityIdUploaded(true);
  };

  const handleNationalIdChange = (e) => {
    setNationalID(e.target.files[0]);
    setIsNationalIdUploaded(true);
  };

  const showHsQuestion = () => {
    document.getElementById("hs-question-container").style.display = "block";
    document.getElementById("uni-question-container").style.display = "none";
    setIsHsStudent(true);
    setIsStudentTypeFilled(true);
  }

  const hideHsQuestion = () => {
    document.getElementById("hs-question-container").style.display = "none";
    document.getElementById("uni-question-container").style.display = "block";
    setIsHsStudent(false);
    setIsStudentTypeFilled(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleValidationCheck = () => {
    let studentIdState = true;
  
    if (!isHsStudent && !isUniversityIdUploaded) {
      studentIdState = false;
    }
  
    if (isNationalIdUploaded && isStudentTypeFilled && studentIdState) {
      handleSubmit();
    } else {
      alert('Please fill in all the required fields.');
    }
  };
  
  const handleSubmit = () => {
    saveFormDataToLocalstorage(formData);
    isHsStudent ? setNavigateTo("/register-committees-delegate-hs") : setNavigateTo("/register-committees-delegate-uni");
  }

  const handleFileUpload = async (e, file, fileType) => {
    e.preventDefault();
    const delegateId = localStorage.getItem('delegate_id');
    const fileData = new FormData();
    fileData.append('file', file);
    fileData.append('id', delegateId);
    fileData.append('fileType', fileType);

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

  useEffect(() => {
    if (navigateTo !== '') {
      window.location.href = navigateTo;
    }
  }, [navigateTo]);

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
                <p className="mb-11 text-center text-base font-medium text-body-col">
                  Fill in all the required fields below to register for BEYMUN 2024.
                </p>
                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full bg-body-color/50 sm:block"></span>
                </div>
                <form onSubmit={handleValidationCheck}>
                    <div className="mb-8 w-1/2">
                        <label
                        htmlFor="f_name"
                        className="mb-3 block text-lg text-dark"
                        >
                        {" "}
                        First Name{" "}
                        <span className="text-trueRed">*</span>
                        </label>
                        <input
                            type="text"
                            name="f_name"
                            value={formData.f_name}
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary mr-5"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-8 w-1/2">
                        <label
                        htmlFor="m_name"
                        className="mb-3 block text-lg text-dark"
                        >
                        {" "}
                        Father{"'"}s Name{" "}
                        <span className="text-trueRed">*</span>
                        </label>
                        <input
                          type="text"
                          name="m_name"
                          value={formData.m_name}
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary mr-5"
                          required
                          onChange={handleChange}
                        />
                    </div>
                    <div className="mb-8 w-1/2">
                        <label
                        htmlFor="l_name"
                        className="mb-3 block text-lg text-dark"
                        >
                        {" "}
                        Last Name{" "}
                        <span className="text-trueRed">*</span>
                        </label>
                        <input
                          type="text"
                          name="l_name"
                          value={formData.l_name}
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                          required
                          onChange={handleChange}
                        />
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
                  <div className="mb-8 w-1/2">
                    <label
                      htmlFor="address-full"
                      className="mb-3 block text-lg text-dark"
                    >
                      {" "}
                      Current Address{" "}
                      <span className="text-trueRed">*</span>
                    </label>
                    <input
                      type="text"
                      name="address_country"
                      value={formData.address_country}
                      className="mb-3 border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                      placeholder="Country"
                      required
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="address_city"
                      value={formData.address_city}
                      className="mb-3 border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                      placeholder="City"
                      required
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="address_street"
                      value={formData.address_street}
                      className="mb-3 border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                      placeholder="Street Address"
                      required
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="address_building"
                      value={formData.address_building}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                      placeholder="Building"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-8 w-1/2">
                    <label
                      htmlFor="birthday"
                      className="mb-3 block text-lg text-dark"
                    >
                      {" "}
                      Date of Birth{" "}
                      <span className="text-trueRed">*</span>
                    </label>
                    <input
                      type="text"
                      name="birthday_day"
                      value={formData.birthday_day}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                      required
                      placeholder="DD"
                      style={{width: "80px", marginRight: "5px"}}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="birthday_month"
                      value={formData.birthday_month}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                      required
                      placeholder="MM"
                      style={{width: "80px", marginRight: "5px"}}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="birthday_year"
                      value={formData.birthday_year}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                      required
                      placeholder="YYYY"
                      style={{width: "120px"}}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-8">
                    <div className="flex flex-col space-y-2 mb-8">
                      <label
                          htmlFor="type"
                          className="mb-3 block text-lg text-dark"
                        >
                          {" "}
                          Are you a high school or university student?{" "}
                          <span className="text-trueRed">*</span>
                      </label>
                      <div className="flex items-center space-x-2">
                        <input 
                          type="radio" 
                          id="high-school" 
                          name="type" 
                          onClick={showHsQuestion}
                          onChange={handleChange}
                        />
                        <span className="cursor-pointer">High School</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input 
                          type="radio" 
                          id="university" 
                          name="type" 
                          onClick={hideHsQuestion}
                          onChange={handleChange}
                        />
                        <span className="cursor-pointer">University</span>
                      </div>
                    </div>
                    </div>
                    <div 
                      className="mb-8" 
                      id="hs-question-container"
                      style={{display: "none"}}
                    >
                    <label
                        htmlFor="school_name"
                        className="mb-3 block text-lg text-dark"
                      >
                        {" "}
                        School Name{" "}
                        <span className="text-trueRed">*</span>
                    </label>
                      <input 
                        type="text" 
                        id="school_name" 
                        name="school_name"
                        value={formData.school_name}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                        onChange={handleChange}
                      />
                  </div>
                  <div 
                    className="mb-8" 
                    id="uni-question-container"
                    style={{display: "none"}}
                  >
                    <div className="flex flex-col space-y-2">
                      <label
                          htmlFor="uni-name"
                          className="mb-3 block text-lg text-dark"
                        >
                          {" "}
                          University Name{" "}
                          <span className="text-trueRed">*</span>
                      </label>
                      <input 
                          type="text" 
                          id="uni-name" 
                          name="university_name"
                          value={formData.university_name}
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                          onChange={handleChange}
                        />
                      <label
                        htmlFor="uni-id"
                        className="mb-3 block text-lg text-dark"
                        style={{marginTop: "20px"}}
                      >
                        {" "}
                        Upload a copy of your university ID{" "}
                        <span className="text-trueRed">*</span>
                      </label>
                      <p className="text-sm font-normal text-blue mb-2">* Accepted file type: PDF</p>
                      <input
                        type="file"
                        id="uni-id"
                        name="uni-id"
                        accept = '.pdf'
                        onChange={handleUniversityIdChange}
                      />
                    </div>
                    <button onClick={(e) => handleFileUpload(e, universityID, 'delegateUniversityID')} className="mt-0 block bg-red text-white py-2 px-4 mt-4 rounded-lg hover:bg-red/80 transition duration-300 w-">
                        Upload File
                    </button>
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="identification"
                      className="mb-3 block text-lg text-dark"
                    >
                      {" "}
                      Upload a copy of your National ID/Passport/Civil Registry Record{" "}
                      <span className="text-trueRed">*</span>
                    </label>
                    <p className="text-sm font-normal text-blue mb-2">* Accepted file type: PDF</p>
                    <input
                        type="file"
                        id="national_id"
                        name="national_id"
                        accept = '.pdf'
                        required
                        onChange={handleNationalIdChange}
                      />
                      <button onClick={(e) => handleFileUpload(e, nationalID, 'delegateNationalID') } className="block bg-red text-white py-2 px-4 mt-4 rounded-lg hover:bg-red/80 transition duration-300">
                        Upload File
                      </button>
                  </div>
                  <div className="mb-6">
                    <Link
                      href={navigateTo}
                      style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif', padding: "12px" }}
                      className="w-full rounded-sm flex justify-center bg-red text-base font-semibold text-white duration-300 ease-in-out hover:bg-red/80"
                      onClick={handleValidationCheck}
                    >
                      Next
                    </Link>
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

export default DelegateInfoPage;