"use client";

import PageHeader from "@/components/page-header";
import Image from "next/image";
import React, { useState } from "react";
import user from "../../../../public/assets/icons/userBlack.png";
import email from "../../../../public/assets/icons/Envelope.png";
import lock from "../../../../public/assets/icons/Lock.png";
import google from "../../../../public/assets/icons/google.png";
import apple from "../../../../public/assets/icons/apple.png";
import Link from "next/link";

const SignUpPage = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <PageHeader heading="Sign up page" title="sign up" />
      <div className="w-[424px] h-[624px] mx-auto my-[100px] inputShadow">
        <div className="p-10">
          <h1 className="text-[20px] font-bold text-txtBlack mb-9">Sign Up</h1>
          {/* name input */}
          <div className="flex flex-row -space-x-1 mt-4">
            <Image
              src={user}
              alt="user"
              width={40}
              height={40}
              className="p-2 border border-outline border-r-0"
            />
            <input
              type="text"
              placeholder="Name"
              className="font-sans outline-none border placeholder-txtGray text-txtGray border-outline border-l-0 p-2 text-[16px] h-[44px] w-full"
            />
          </div>
          {/* email input */}
          <div className="flex flex-row -space-x-1 mt-4">
            <Image
              src={email}
              alt="email"
              width={40}
              height={40}
              className="p-2 border border-outline border-r-0"
            />
            <input
              type="email"
              placeholder="Email"
              className="font-sans outline-none border placeholder-txtGray text-txtGray border-outline border-l-0 p-2 text-[16px] h-[44px] w-full"
            />
          </div>
          {/* password input */}
          <div className="flex flex-row -space-x-1 mt-4">
            <Image
              src={lock}
              alt="lock"
              width={40}
              height={40}
              className="p-2 border border-outline border-r-0"
            />
            <input
              type="password"
              placeholder="Password"
              className="font-sans outline-none border placeholder-txtGray text-txtGray border-outline border-l-0 p-2 text-[16px] h-[44px] w-full"
            />
          </div>
          {/* checkbox remember me */}
          <div className="mt-4">
            {/* Custom checkbox */}
            <label className="inline-flex items-center cursor-pointer gap-2">
              {/* Checkbox input with custom styles */}
              <input
                type="checkbox"
                className="peer hidden"
                onChange={handleCheckboxChange}
                defaultChecked
              />
              {/* Custom box for checkbox */}
              <span className="w-[20px] h-[20px] border-2 border-gray-300 rounded-none flex justify-center items-center peer-checked:bg-orangeLike peer-checked:border-orangeLike peer-checked:ring-2 peer-checked:ring-orangeLike">
                <svg
                  className="w-4 h-4 text-white peer-checked:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              {/* Label text */}
              <span className="select-none text-[14px] font-sans">
                Remember me?
              </span>
            </label>
          </div>
          {/* sign Up btn */}
          <button className="py-2 h-[44px] w-full px-3 bg-orangeLike text-white text-[16px] font-[300] mt-8 text-nowrap hover:bg-orange-500 transition-colors duration-200">
            Sign Up
          </button>
          {/* forget password */}
          <p className="text-end text-txtlight text-[14px] font-sans mt-3">
            Forget password?
          </p>
          <div className="space-y-3">
            <div className="flex flex-row mt-9">
              <div className="w-[158px] bg-outline h-[1px] mt-[16px]" />
              <div className="h-[32px] mx-auto w-[32px] border border-outline flex items-center justify-center">
                <p className="text-center text-txtGray text-[14px] font-sans">
                  OR
                </p>
              </div>
              <div className="w-[158px] bg-outline h-[1px] mt-[16px]" />
            </div>
            {/* google / apple */}
            <div className="space-y-3">
              {/* google */}
              <div>
                <Link href="/signUp">
                  <Image src={google} alt="google" />
                </Link>
              </div>
              {/* apple */}
              <div>
                <Link href="/signUp">
                  <Image src={apple} alt="apple" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
