import React from "react";
import HeroBg from "@/assets/heroBg.jpg";
import ProfileImg from "@/assets/profileImg.jpg";
import Image from "next/image";

const index = () => {
  return (
    <div className="flex justify-center items-center mb-[24px]">
      <div className="relative max-w-[1295px] p-[12px] md:p-[24px] w-full border border-gray-200 rounded-[12px] h-[335px]">
        <div className="w-full h-[188px] overflow-hidden rounded-[12px]">
          <Image
            src={HeroBg}
            alt="Hero bg"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="absolute bottom-[24px]">
          <div className="flex gap-[24px] justify-start items-center">
            <div className="border-[4px] border-white overflow-hidden h-[144px] w-[144px] rounded-full shadow-md shadow-gray-200">
              <Image
                src={ProfileImg}
                alt="profile img"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-[8px]">
              <h3 className="font-[600] text-[24px] leading-[32px] text-gray-900">
                Starts in: 3 days : 2 hours : 24 minutes{" "}
              </h3>
              <div className="flex justify-start items-center gap-[8px]">
                <span className="w-[88px] flex justify-between items-center h-[28px] rounded-[16px] bg-warning-50 px-[12px] py-[4px] text-warning-700 font-[500] ">
                  <span>.</span>
                  <span>Not Live</span>
                </span>
                <span className="text-gray-600 leading-[24px] font-[400] text-[16px]">
                  Layers Auction
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
