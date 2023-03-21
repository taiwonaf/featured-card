import React from "react";
import Image from "next/image";

const FeaturedCard = ({ item }) => {
  const { title, price, img } = item;
  return (
    <div className="max-w-[295px] w-full h-[353px] rounded-[12px] border border-gray-300 p-[12px] duration-300 hover:shadow-container">
      <div className="flex flex-col justify-between h-full">
        <div className="bg-grayBg justify-center items-center w-full h-[132px] rounded-[12px] mb-[16px] overflow-hidden">
          <Image src={img} alt="Macbook" />
        </div>
        <div className="border-b border-gray-200 pb-[8px] mb-[12px]">
          <div className="py-[4px] flex gap-[8px] justify-start items-center">
            <div className="h-[32px] w-[32px] rounded-full bg-gray-100 flex justify-center items-center">
              <span className="text-[14px] font-[500] leading-[20px]">KO</span>
            </div>
            <div className="text-[12px] leading-[18px] text-gray-700">
              <span className="font-[600]">Koray Okumus</span>
              <span className="font-[400]text-lightGray">
                {" "}
                (Highest Bidder)
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-[14px] font-[600] leading-[20px] text-gray-900 mb-[8px]">
              {title}
            </h3>
            <div className="flex gap-[5px] items-center justify-start">
              <span className="text-gray-700 text-[14px] font-[400] leading-[20px]">
                Current Bid:
              </span>
              <span className="text-gray-700 text-[14px] font-[700] leading-[20px]">
                {price}
              </span>
            </div>
          </div>
        </div>
        <div className="text-white">
          <button className="w-full h-[40px] bg-primary-600 rounded-[8px] border border-primary-600 p-[10px] text-[14px] text-white">
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
