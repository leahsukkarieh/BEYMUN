"use client"
import React, { useState, useEffect } from 'react';
import SectionTitle from "../Common/SectionTitle";

const DatesVenue = () => {
  const targetDate = new Date('2024-04-12T23:59:59');

  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      // If the target date has passed, set the countdown to 0
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Calculate remaining time
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [countdown, setCountdown] = useState(calculateTimeRemaining());

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      setCountdown(calculateTimeRemaining());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
    });

  return (
    <>
      <section id="datesvenue" className="py-16 md:py-20 lg:py-28">
        <div 
          className="container flex flex-col justify-center items-center"
          style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif' }}
          >
          <SectionTitle
            title="Dates & Venue"
            paragraph="Join us on the American University of Beirut (AUB) Campus on April 13, 14 and 15!"
            center
          />
          <div className='flex flex-col justify-center items-center'>
            <div className='flex'>
              <div
                className="wow fadeInUp hover:shadow-two group relative overflow-hidden rounded bg-gray-200 bg-opacity-75 shadow-one duration-300 p-5 md:p-8"
                data-wow-delay=".1s"
                style={{marginRight:"6px", width: "27%"}}
              >
                <p className="text-center font-semibold text-2xl md:text-3xl text-red">
                  {countdown.days}
                </p> 
                <p className="text-center font-normal text-sm">
                  Days
                </p>
              </div>
              <div
                className="wow fadeInUp hover:shadow-two group relative overflow-hidden rounded bg-gray-200 bg-opacity-75 shadow-one duration-300 p-5 md:p-8"
                data-wow-delay=".1s"
                style={{marginRight:"6px", width: "27%"}}
              >
                <p className="text-center font-semibold text-2xl md:text-3xl text-red">
                  {countdown.hours}
                </p> 
                <p className="text-center font-normal text-sm">
                  Hours
                </p>
              </div>
              <div
                className="wow fadeInUp hover:shadow-two group relative overflow-hidden rounded bg-gray-200 bg-opacity-75 shadow-one duration-300 p-5 md:p-8"
                data-wow-delay=".1s"
                style={{marginRight:"6px", width: "27%"}}
              >
                <p className="text-center font-semibold text-2xl md:text-3xl text-red">
                  {countdown.minutes}
                </p> 
                <p className="text-center font-normal text-sm">
                  Minutes
                </p>
              </div>
              <div
                className="wow fadeInUp hover:shadow-two group relative overflow-hidden rounded bg-gray-200 bg-opacity-75 shadow-one duration-300 p-5 md:p-8"
                data-wow-delay=".1s"
                style={{marginRight:"6px", width: "27%"}}
              >
                <p className="text-center font-semibold text-2xl md:text-3xl text-red">
                  {countdown.seconds}
                </p> 
                <p className="text-center font-normal text-sm">
                  Seconds
                </p>
              </div>
            </div>
            <p
             className="text-base !leading-relaxed text-blue md:text-md mt-4"
              style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif' }}
            >
              Countdown till BEYMUN 2024
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DatesVenue;

