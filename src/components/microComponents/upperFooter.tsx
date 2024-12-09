import React from "react";

const UpperFooter = () => {
  return (
    <div className="px-24">
      <div className="text-white py-7 flex flex-row justify-between">
        {/* text div */}
        <div className="flex flex-col space-y-2">
          <h1 className="font-sans text-[32px] font-bold">
            <span className="text-orangeLike">St</span>ill You Need Our Support
            ?
          </h1>
          <p className="font-sans text-[16px]">
            Don’t wait make a smart & logical quote here. Its pretty easy.
          </p>
        </div>
        {/* subscribe div */}
        <div className="flex flex-row">
          <div className="sm:w-64 w-40 sm:mr-4 mr-2">
            <input
              type="text"
              id="footer-field"
              placeholder="Enter Your Email"
              className="text-white w-[296px] placeholder-white placeholder-opacity-[59%] bg-orangeLike hover:bg-orange-500 focus:bg-orange-500 cursor-pointer focus:cursor-text rounded-md text-base outline-none py-2 px-5 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-orangeLike bg-white hover:bg-slate-100 active:bg-white py-3 px-6 h-fit focus:outline-none rounded text-nowrap">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* seperation */}
      <div className="bg-orangeLike p-[0.5px] w-full" />
    </div>
  );
};

export default UpperFooter;
