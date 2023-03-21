import React from "react";
import FeaturedItems from "./FeaturedItems";

const index = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="max-w-[1295px] w-full border border-gray-200 rounded-[12px] p-[24px] shadow-featured">
        <div>
          <div className="flex justify-between items-center gap-[20px] border-b border-gray-200 pb-[24px] mb-[24px]">
            <h5>Featured Items</h5>
            <div className=" cursor-pointer hover:shadow-md duration-300 flex justify-between items-center gap-[10px] px-[14px] py-[8px] h-[36px] rounded-[8px] border border-gray-300 shadow-button hover:scale-105">
              <span className="leading-[20px] font-[600] text-[14px] text-grey-700 ">
                View Auction
              </span>
            </div>
          </div>
          <div>
            <FeaturedItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
