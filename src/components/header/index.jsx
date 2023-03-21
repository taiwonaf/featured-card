import React from "react";
import HeroBg from "@/assets/heroBg.jpg";
import ProfileImg from "@/assets/profileImg.jpg";
import Image from "next/image";

const index = () => {
  return (
    <div className="flex justify-center items-center mb-[24px]">
      <div className="max-w-[1295px] p-[12px] md:p-[24px] w-full border border-gray-200 rounded-[12px] h-[335px]">
        <div className="w-full h-[188px] overflow-hidden rounded-[12px]">
          <Image
            src={HeroBg}
            alt="Hero bg"
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <div>
            <div className="border-[4px] border-white overflow-hidden h-[144px] w-[144px] rounded-full shadow-md shadow-gray-200">
              <Image
                src={ProfileImg}
                alt="profile img"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
