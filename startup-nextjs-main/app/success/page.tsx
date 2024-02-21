"use client"
import Link from "next/link";
import {useEffect, useState } from "react";
import axios from "axios";

const ReceiptPage = () => {

    useEffect(() => {
        localStorage.clear();
    }, []);

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async (e) => {
    e.preventDefault();
    const delegateId = localStorage.getItem('delegate_id');
    const fileData = new FormData();
    fileData.append('file', file);
    fileData.append('id', delegateId);
    fileData.append('fileType', 'paymentReceipt');

    try {
        await axios.post('http://localhost:5000/api/upload', fileData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        });
        alert('File uploaded successfully');
        window.location.href = "/success"
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
                  Registration Successful
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-col">
                  Thank you for applying for BEYMUN 2024.
                </p>
                <div className="mb-6">
                  <Link 
                    href={"/"}
                    style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif', padding: "12px" }}
                    className="rounded-sm flex justify-center bg-red text-base font-semibold text-white duration-300 ease-in-out hover:bg-red/80"
                  >
                    Return to Home
                  </Link>  
                </div> 
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

export default ReceiptPage;