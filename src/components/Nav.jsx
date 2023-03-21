import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center mb-[48px]">
      <div className="pt-[30px] pb-[20px] max-w-[1295px] w-full  border-b border-gray-200">
        <div>
          <h1 className="font-[600] text-[30px] leading-[38px] text-gray-900 mb-[4px]">
            Welcome
          </h1>
          <p className="text-[16px] font-[400] leading-[24px] text-gray-600">
            Your current sales auction and activity.
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
