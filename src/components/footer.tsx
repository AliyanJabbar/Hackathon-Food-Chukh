import React from "react";
import UpperFooter from "./microComponents/upperFooter";
import Link from "next/link";
import Image from "next/image";
import Watch from "../../public/assets/icons/Watch.png";
import RecentPostsFooter from "./microComponents/RecentPosts-Footer";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white bg-blackish body-font h-fit">
      <div className="px-[7%] w-full pt-10">
        <UpperFooter />
        <div className="flex flex-wrap gap-10 md:flex-row items-start justify-between md:text-left text-center order-first text-nowrap my-14">
          {/* About Us */}
          <div className="sm:w-[45%] lg:w-auto">
            <h2 className="font-sans font-semibold text-[20px] mb-7 shadow tracking-normal">
              About Us.
            </h2>
            <p className="w-[380px] font-sans text-[18px] text-wrap mb-6">
              orporate clients and leisure travelers hasbeen relying on
              Groundlink for dependablesafe, and professional chauffeured
              carservice in major cities across World.
            </p>
            <div className="flex flex-row gap-4">
              <Image src={Watch} alt="watch" />
              <div>
                <h1 className="text-[18px] font-[300]">Opening Houres</h1>
                <p>Mon - Sat(8.00 - 6.00)</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full sm:w-[45%] lg:w-auto">
            <h2 className="font-sans font-semibold text-[20px] mb-7 shadow tracking-normal">
              Useful Links
            </h2>
            <nav className="list-none mb-5 space-y-4 text-[16px]">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">News</Link>
              </li>
              <li>
                <Link href="/">Partners</Link>
              </li>
              <li>
                <Link href="/">Team</Link>
              </li>
              <li>
                <Link href="/">Menu</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </nav>
          </div>

          {/* Help? */}
          <div className="w-full sm:w-[45%] lg:w-auto">
            <h2 className="font-sans font-semibold text-[20px] mb-7 shadow tracking-normal">
              Help?
            </h2>
            <nav className="list-none mb-5 space-y-4 text-[16px]">
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/">Term & Condition</Link>
              </li>
              <li>
                <Link href="/">Reporting</Link>
              </li>
              <li>
                <Link href="/">Documentation</Link>
              </li>
              <li>
                <Link href="/">Support Policy</Link>
              </li>
              <li>
                <Link href="/">Privacy</Link>
              </li>
            </nav>
          </div>

          {/* Recent Post*/}
          <div className="w-full sm:w-[45%] lg:w-auto">
            <h2 className="font-sans font-semibold text-[20px] mb-7 shadow tracking-normal">
              Recent Post
            </h2>
            <div className="flex flex-col space-y-5">
              <RecentPostsFooter
                heading="Is fastfood good for your body?"
                date="February 28,2022"
              />
              <RecentPostsFooter
                heading="Change your food habit With organic food"
                date="February 28,2022"
              />
              <RecentPostsFooter
                heading="Do you like fastfood for your life?"
                date="February 28,2022"
              />
            </div>
          </div>
        </div>
      </div>
      {/* copyright ending footer */}
      <div className="bg-txtGray h-[99px] w-full">
        <div className="px-[7%] flex flex-row justify-between items-center h-[99px]">
          <p className="text-[16px] font-[300]">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <nav className="flex gap-3">
            {/* facebook */}
            <div className="w-[36px] h-[33px] bg-white cursor-pointer rounded flex items-center justify-center group">
              <FaFacebookF className="text-icons group-hover:text-orangeLike transition-colors duration-150" />
            </div>
            {/* twitter */}
            <div className="w-[36px] h-[33px] bg-white cursor-pointer rounded flex items-center justify-center group">
              <FaTwitter className="text-icons group-hover:text-orangeLike transition-colors duration-150" />
            </div>
            {/* insta */}
            <div className="w-[36px] h-[33px] bg-white cursor-pointer rounded flex items-center justify-center group">
              <FaInstagram className="text-icons group-hover:text-orangeLike transition-colors duration-150" />
            </div>
            {/* youtube */}
            <div className="w-[36px] h-[33px] bg-white cursor-pointer rounded flex items-center justify-center group">
              <GrYoutube className="text-icons group-hover:text-orangeLike transition-colors duration-150" />
            </div>
            {/* pinterest */}
            <div className="w-[36px] h-[33px] bg-white cursor-pointer rounded flex items-center justify-center group">
              <FaPinterest className="text-icons group-hover:text-orangeLike transition-colors duration-150" />
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
