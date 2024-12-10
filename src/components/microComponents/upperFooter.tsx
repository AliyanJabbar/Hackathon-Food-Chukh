import React from "react";

const UpperFooter = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <div className="text-white py-7 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        {/* Text div */}
        <div className="flex flex-col space-y-2 mb-5 sm:mb-0">
          <h1 className="font-sans text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold">
            <span className="text-orangeLike">St</span>ill You Need Our Support?
          </h1>
          <p className="font-sans text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
            Don’t wait, make a smart & logical choice here. It's pretty easy.
          </p>
        </div>
        {/* Subscribe div */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:w-auto">
          <div className="w-40 lg:w-64 -mr-1 mb-3 sm:mb-0">
            <input
              type="text"
              id="footer-field"
              placeholder="Enter Your Email"
              className="text-white w-full placeholder-white placeholder-opacity-[59%] bg-orangeLike hover:bg-orange-500 focus:bg-orange-500 cursor-pointer focus:cursor-text rounded-md text-base outline-none py-2 px-3 lg:px-5 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-orangeLike bg-white hover:bg-slate-100 active:bg-white py-3 px-3 lg:px-6 xl:px-8 h-fit focus:outline-none rounded text-nowrap w-fit">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* Separation line */}
      <div className="bg-orangeLike p-[0.5px] w-full" />
    </div>
  );
};

export default UpperFooter;
