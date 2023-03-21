import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center mb-[48px]">
      <div className="flex justify-between items-start pt-[30px] pb-[20px] max-w-[1295px] w-full  border-b border-gray-200">
        <div>
          <h1 className="font-[600] text-[30px] leading-[38px] text-gray-900 mb-[4px]">
            Welcome
          </h1>
          <p className="text-[16px] font-[400] leading-[24px] text-gray-600">
            Your current sales auction and activity.
          </p>
        </div>
        <div className="hover:scale-105 duration-300 relative flex justify-center items-center">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="44" height="44" rx="6" fill="white" />
            <path
              d="M19.3542 31C20.0593 31.6224 20.9856 32 22 32C23.0145 32 23.9407 31.6224 24.6458 31M28 18C28 16.4087 27.3679 14.8826 26.2427 13.7574C25.1174 12.6321 23.5913 12 22 12C20.4087 12 18.8826 12.6321 17.7574 13.7574C16.6322 14.8826 16 16.4087 16 18C16 21.0902 15.2205 23.206 14.3497 24.6054C13.6151 25.7859 13.2479 26.3761 13.2613 26.5408C13.2763 26.7231 13.3149 26.7926 13.4618 26.9016C13.5945 27 14.1926 27 15.3889 27H28.6112C29.8074 27 30.4056 27 30.5382 26.9016C30.6852 26.7926 30.7238 26.7231 30.7387 26.5408C30.7522 26.3761 30.3849 25.7859 29.6504 24.6054C28.7795 23.206 28 21.0902 28 18Z"
              stroke="#667085"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="absolute right-[0px] bottom-[2px] h-[20px] w-[20px] bg-error-500 flex justify-center items-center rounded-full">
            <span className="text-[12px] font-[500] leading-[18px] text-white">
              2
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
