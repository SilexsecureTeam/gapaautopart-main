import React, { useState, useEffect, memo } from "react";
import { Clock, Tag } from "lucide-react";

const deadline = new Date("2025-08-10T23:59:59+01:00"); 

const calculateTimeLeft = () => {
  const difference = deadline - new Date();
  if (difference <= 0) {
    return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    expired: false,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Notification = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="bg-white min-h-[40px] w-full">
      <div className="max-w-[700px] mx-auto py-4 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center font-semibold text-lg gap-2">
          <Tag size={20} className="text-[#492F92]" />
          <span>
            SAVE 10% ON <span className="font-bold text-[#492F92]">SPARE PARTS*</span>
          </span>
        </div>
        <div className="flex items-center font-semibold text-lg gap-2">
          <Clock size={20} className="text-[#492F92]" />
          <span className='flex items-center gap-2'>
            OFFER ENDS IN{" "}
            {timeLeft.expired ? (
              <span className="font-semibold">EXPIRED</span>
            ) : (
              <div className='font-semibold text-white flex gap-2'>
              <span className=" bg-[#343a40] text-sm py-1 px-3">
                {timeLeft.days > 0 ? `${timeLeft.days}d ` : ""} </span>
              <span className=" bg-[#343a40] text-sm py-1 px-3">  {String(timeLeft.hours).padStart(2, "0")}  </span>
               <span className=" bg-[#343a40] text-sm py-1 px-3"> {String(timeLeft.minutes).padStart(2, "0")} </span>
               <span className=" bg-[#343a40] text-sm py-1 px-3"> {String(timeLeft.seconds).padStart(2, "0")} </span>
              
              </div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(Notification);