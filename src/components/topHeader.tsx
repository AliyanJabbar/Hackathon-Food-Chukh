"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import searchIcon from "../../public/assets/icons/MagnifyingGlass-icon.png";
import userIcon from "../../public/assets/icons/User-icon.png";
import bagIcon from "../../public/assets/icons/Bag-icon.png";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

const TopHeader = () => {
  const { cartCount } = useCart();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="text-white bg-blackish w-full body-font flex flex-wrap items-center z-20 px-[7%]">
      <div className="w-full flex py-5 flex-col md:flex-row items-center z-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <h1 className="ml-3 text-xl text-white font-sans text-[24px] font-bold z-20">
            Food<span className="text-orangeLike">tuck</span>
          </h1>
        </Link>

        {/* Hamburger Icon for Small Screens */}
        <button
          className="md:hidden ml-auto text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex w-full overflow-x-auto md:overflow-visible md:mx-auto md:w-auto justify-center items-center text-base text-[14px] md:text-[16px] font-normal gap-2`}
        >
          <div className="flex gap-4 w-full flex-nowrap md:flex-wrap">
            {[
              { label: "Home", path: "/" },
              { label: "Menu", path: "/menu" },
              { label: "Blog", path: "/blog" },
              { label: "Pages", path: "/pages" },
              { label: "About", path: "/about" },
              { label: "Shop", path: "/shop" },
              { label: "Contact", path: "/signUp" },
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-2 py-1 cursor-pointer transition-all duration-150 whitespace-nowrap ${
                  pathname === link.path
                    ? "font-bold text-orangeLike"
                    : "hover:text-orangeLike"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Icons */}
        <div className="flex gap-3 sm:gap-5 mt-4 md:mt-0">
          <Link href="/">
            <Image
              src={searchIcon}
              alt="search-icon"
              width={24}
              height={24}
              className="hover:-translate-y-1 transtion-all duration-200"
            />
          </Link>
          <Link href="/signUp">
            <Image
              src={userIcon}
              alt="user-icon"
              width={24}
              height={24}
              className="hover:-translate-y-1 transtion-all duration-200"
            />
          </Link>
          <Link href="/shoppingCart">
            <div className="relative hover:-translate-y-1 transtion-all duration-200">
              <Image src={bagIcon} alt="bag-icon" width={24} height={24} />

              {cartCount > 0 && (
                <span className="absolute -top-[9px] -right-[9px] bg-orangeLike text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
