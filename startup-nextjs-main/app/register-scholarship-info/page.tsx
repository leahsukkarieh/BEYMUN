"use client"
import Link from "next/link";
import {useState, useEffect } from "react";
import axios from 'axios';

const saveFormDataToLocalstorage = (formData) => {
  const formDataJson = JSON.stringify(formData);
  localStorage.setItem('scholarshipQuestions', formDataJson);
};

const RegistrationScholarshipInfoPage = () => {

  const [delegateId, setDelegateId] = useState(null);

  const [qOneWordLimitVisible, setQOneWordLimitVisible] = useState(false);
  const [qTwoWordLimitVisible, setQTwoWordLimitVisible] = useState(false);
  const [qThreeWordLimitVisible, setQThreeWordLimitVisible] = useState(false);
  const [qFourWordLimitVisible, setQFourWordLimitVisible] = useState(false);

  const [qOneWordCount, setQOneWordCount] = useState("0");
  const [qTwoWordCount, setQTwoWordCount] = useState("0");
  const [qThreeWordCount, setQThreeWordCount] = useState("0");
  const [qFourWordCount, setQFourWordCount] = useState("0");

  useEffect(() => {
    // Define a function to fetch the last delegate ID
    const fetchLastDelegateId = async () => {
      try {
        // Make a GET request to the backend route
        const response = await fetch('http://localhost:5000/api/delegate-id/last-delegate-id', {
          method: 'GET' });

        // Check if the response is successful
        if (response.ok) {
          // Parse the JSON response
          const data = await response.json();
          
          // Check if the response contains the last delegate ID
          if (data.lastDelegateId !== undefined) {
            // Update the state with the last delegate ID
            setDelegateId(data.lastDelegateId + 1);
            localStorage.setItem('delegate_id', delegateId);
          } else {
            console.error('Response does not contain lastdelegateId:', data);
          }
        } else {
          console.error('Failed to fetch last delegate ID:', response.status);
        }
      } catch (error) {
        console.error('Error fetching last delegate ID:', error);
      }
    };

    // Call the function to fetch the last delegate ID
    fetchLastDelegateId();
  }, [delegateId]); 


  const [formData, setFormData] = useState({
    question_one: "",
    question_two: "",
    question_three: "",
    additional_info: ""
  });

  const [file, setFile] = useState(null);

  const handleChange = (e, question) => {
    const { name, value } = e.target;
    const words = value.split(/\s+/);
    let maxWordCount = 0;

    if (question === 'one') {
      maxWordCount = 200;
    } else if (question === 'two' || question === 'four') {
      maxWordCount = 100;
    } else if (question === 'three') {
      maxWordCount = 150;
    }

    if (words.length <= maxWordCount) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
      if (question === 'one') {
        setQOneWordLimitVisible(false);
        setQOneWordCount((words.length -1).toString());
      } else if (question === 'two') { 
        setQTwoWordLimitVisible(false);
        setQTwoWordCount((words.length -1).toString());
      } else if (question === 'three') {
        setQThreeWordLimitVisible(false);
        setQThreeWordCount((words.length -1).toString());
      } else if (question === 'four') {
        setQFourWordLimitVisible(false);
        setQFourWordCount((words.length -1).toString());
      }
    } else {
      if (question === 'one') {
        setQOneWordLimitVisible(true);
      } else if (question === 'two') { 
        setQTwoWordLimitVisible(true);
      } else if (question === 'three') {
        setQThreeWordLimitVisible(true);
      } else if (question === 'four') {
        setQFourWordLimitVisible(true);
      }
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const fileData = new FormData();
    fileData.append('file', file);
    fileData.append('id', delegateId);
    fileData.append('fileType', 'positionPaper');

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

  const handleSubmit = () => {
    saveFormDataToLocalstorage(formData);
  }

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[700px] rounded bg-white px-6 py-10 sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl">
                  Scholarship Information 
                </h3>
                <p className="mb-11 text-center text-base font-medium text-red">
                  Any AI-generated answers will lead to immediate disqualification.
                </p>
                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full bg-body-color/50 sm:block"></span>
                </div>
                <form onSubmit={handleSubmit}> 
                  <div className="mb-8">
                    <label
                      htmlFor="question_one"
                      className="mb-3 block text-lg text-dark"
                    >
                      {" "}
                      Why are you interested in BEYMUN? What motivates you to participate?{" "}
                      <span className="text-trueRed">*</span>
                    </label>
                    <textarea
                      id="question_one"
                      name="question_one"
                      placeholder="Limit your answer to 200 words."
                      value={formData.question_one}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary h-20"
                      required
                      onChange={(e) => handleChange(e, 'one')}
                    />
                    <p className="text-black font-normal text-sm">{qOneWordCount}/200</p>
                    {qOneWordLimitVisible && 
                      <p className="text-red font-normal text-md">Word Limit Exceeded!</p>
                    }
                  </div>
                  <div className="mb-8">
                      <label
                        htmlFor="question_two"
                        className="mb-3 block text-lg text-dark"
                      >
                        {" "}
                        What sets you apart as a candidate worthy of selection?{" "}
                        <span className="text-trueRed">*</span>
                      </label>
                      <textarea
                        id="question_two"
                        name="question_two"
                        placeholder="Limit your answer to 100 words."
                        value={formData.question_two}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary h-20"
                        required
                        onChange={(e) => handleChange(e, 'two')}
                    />
                     <p className="text-black font-normal text-sm">{qTwoWordCount}/100</p>
                    {qTwoWordLimitVisible && 
                      <p className="text-red font-normal text-md">Word Limit Exceeded!</p>
                    }
                  </div>
                  <div className="mb-8">
                      <label
                        htmlFor="question_three"
                        className="mb-3 block text-lg text-dark"
                      >
                        {" "}
                        Describe your relevant Model United Nations (MUN) experience that 
                        demonstrates your suitability for a scholarship.{" "}
                        <span className="text-trueRed">*</span>
                      </label>
                      <textarea
                        id="question_three"
                        name="question_three"
                        placeholder="Limit your answer to 150 words."
                        value={formData.question_three}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary h-20"
                        required
                        onChange={(e) => handleChange(e, 'three')}
                      />
                       <p className="text-black font-normal text-sm">{qThreeWordCount}/150</p>
                      {qThreeWordLimitVisible && 
                        <p className="text-red font-normal text-md">Word Limit Exceeded!</p>
                      }
                  </div>
                  <div className="mb-8">
                      <label
                        htmlFor="positionpaper"
                        className="mb-3 block text-lg text-dark"
                      >
                        {" "}
                        Upload a position paper about topic the following topic.{" "}
                        <span className="text-trueRed">*</span>
                        <p className="font-normal text-sm text-blue">
                          * This position paper is only for scholarship selection purposes.
                          You will have to submit another position paper if participating in BEYMUN.
                        </p>
                        <div className="p-6">
                          <p className="font-semibold text-md text-blue">
                            The Role of Artificial Intelligence in Ensuring Global Food Security
                          </p>
                          <p className="font-normal text-sm text-justify">
                            As the world population continues to grow, 
                            the challenge of ensuring food security becomes increasingly complex. 
                            Artificial Intelligence (AI) holds great potential to revolutionize various 
                            aspects of agriculture, from optimizing crop yields and resource management to 
                            enhancing distribution systems and reducing food waste. However, the integration of 
                            AI into agricultural practices also raises ethical, economic, and social considerations. 
                            Delegates will explore the opportunities and challenges associated with harnessing AI 
                            technologies to address global food security concerns, while considering the implications 
                            for sustainability, equity, and rural development.
                          </p>
                        </div>
                      </label>
                      <p className="text-sm font-normal text-blue mb-2">* Accepted file types: Word document or PDF.</p>
                      <input
                        type="file"
                        id="positionpaper"
                        name="positionpaper"
                        accept=".doc, .docx, .pdf"
                        required
                        onChange={handleFileChange}
                      />
                      <button onClick={handleFileUpload} className="block bg-red text-white py-2 px-4 mt-4 rounded-lg hover:bg-red/80 transition duration-300">
                        Upload File
                      </button>
                  </div>
                  <div className="mb-8">
                      <label
                        htmlFor="additional_info"
                        className="mb-3 block text-lg text-dark"
                      >
                        {" "}
                        Is there any additional information you would like the selection committee to consider?{" "}
                      </label>
                      <textarea
                        id="additional_info"
                        name="additional_info"
                        placeholder="Limit your answer to 100 words."
                        value={formData.additional_info}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary h-20"
                        onChange={(e) => handleChange(e, 'four')}
                      />
                       <p className="text-black font-normal text-sm">{qFourWordCount}/100</p>
                      {qFourWordLimitVisible && 
                        <p className="text-red font-normal text-md">Word Limit Exceeded!</p>
                      }
                  </div>
                  <div className="mb-6">
                    <Link href="/register-delegate-info"
                      style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif', padding: "12px" }}
                      className="rounded-sm flex justify-center bg-red text-base font-semibold text-white duration-300 ease-in-out hover:bg-red/80"
                      onClick={handleSubmit}
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

export default RegistrationScholarshipInfoPage;