"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import searchIcon from "../../public/assets/icons/MagnifyingGlass-icon.png";
import userIcon from "../../public/assets/icons/User-icon.png";
import bagIcon from "../../public/assets/icons/Bag-icon.png";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const TopHeader = () => {
  const { cart } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const toggleIsPagesOpen = () => {
    setIsPagesOpen(!isPagesOpen);
  };
  const handleNavigation = (path: string) => {
    if (path !== pathname) {
      setIsMenuOpen(false);
      setTimeout(() => {
        router.push(path);
      }, 1000);
    }
  };

  return (
    <header className="text-white bg-blackish w-full body-font flex flex-wrap items-center z-20 px-[7%]">
      <div className="w-full flex py-5 flex-col min-[800px]:flex-row items-center z-20">
        {/* Logo */}
        <div
          onClick={() => handleNavigation("/")}
          className="flex title-font font-medium items-center mb-4 min-[800px]:mb-0 cursor-pointer"
        >
          <h1 className="ml-3 text-xl text-white font-sans text-[24px] font-bold z-20">
            Food<span className="text-orangeLike">tuck</span>
          </h1>
        </div>

        {/* Hamburger Icon */}
        <button
          className="min-[800px]:hidden ml-auto text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          } min-[800px]:flex w-full overflow-x-auto min-[800px]:overflow-visible min-[800px]:mx-auto min-[800px]:w-auto justify-center items-center text-base text-[14px] min-[800px]:text-[16px] font-normal gap-2`}
        >
          <div className="flex flex-col items-center justify-center min-[800px]:flex-row gap-2 md:gap-[2px] min-[780px]:gap-1 min-[820px]:gap-2 min-[900px]:gap-3 lg:gap-4 min-[800px]:w-full flex-nowrap min-[800px]:flex-wrap">
            {[
              { label: "Home", path: "/" },
              { label: "Menu", path: "/menu" },
              { label: "Blog", path: "/blogs" },
              { label: "Pages" },
              { label: "About", path: "/about" },
              { label: "Shop", path: "/shop" },
              { label: "Contact", path: "/contact" },
            ].map((link) =>
              link.label === "Pages" ? (
                <div
                  key={link.label}
                  className="group relative"
                  onClick={() => {
                    toggleIsPagesOpen();
                  }}
                >
                  <div className="flex gap-1 items-center justify-center cursor-pointer transition-all duration-150 whitespace-nowrap hover:text-orangeLike text-white lg:hover:fill-orangeLike">
                    Pages
                    <FaAngleDown />
                  </div>
                  <ul
                    className={`absolute shadow-lg bg-black/10 backdrop-blur-md text-white space-y-3 lg:top-10 max-lg:top-12 -left-6 min-w-[250px] z-50 transition-all duration-300 ${
                      isPagesOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    } px-6 py-4`}
                  >
                    <li className="border-b py-2 ">
                      <Link
                        href="/notFound"
                        className="hover:text-orangeLike transition text-white text-[15px] font-bold block"
                      >
                        Not Found Page
                      </Link>
                    </li>
                    <li className="border-b py-2 ">
                      <Link
                        href="/userDetails"
                        className="hover:text-orangeLike transition text-white text-[15px] font-bold block"
                      >
                        User Details
                      </Link>
                    </li>
                    <li className="border-b py-2 ">
                      <Link
                        href="/faq"
                        className="hover:text-orangeLike transition text-white text-[15px] font-bold block"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li className="border-b py-2 ">
                      <Link
                        href="shoppingCart"
                        className="hover:text-orangeLike transition text-white text-[15px] font-bold block"
                      >
                        Cart
                      </Link>
                    </li>
                    <li className="border-b py-2 ">
                      <Link
                        href="/checkout"
                        className="hover:text-orangeLike transition text-white text-[15px] font-bold block"
                      >
                        Checkout
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <div
                  key={link.path}
                  onClick={() => handleNavigation(link.path!)}
                  className={`px-2 py-1 cursor-pointer transition-all duration-150 whitespace-nowrap ${
                    pathname === link.path
                      ? "font-bold text-orangeLike"
                      : "hover:text-orangeLike"
                  }`}
                >
                  {link.label}
                </div>
              )
            )}
          </div>
        </nav>

        {/* Icons */}
        <div className="flex gap-3 sm:gap-5 mt-4 min-[800px]:mt-0">
          <div onClick={() => handleNavigation("/")} className="cursor-pointer">
            <Image
              src={searchIcon}
              alt="search-icon"
              width={24}
              height={24}
              className="hover:-translate-y-1 transition-all duration-200"
            />
          </div>
          <div
            onClick={() => handleNavigation("/userDetails")}
            className="cursor-pointer"
          >
            <Image
              src={userIcon}
              alt="user-icon"
              width={24}
              height={24}
              className="hover:-translate-y-1 transition-all duration-200"
            />
          </div>
          <div
            onClick={() => handleNavigation("/shoppingCart")}
            className="cursor-pointer"
          >
            <div className="relative hover:-translate-y-1 transition-all duration-200">
              <Image src={bagIcon} alt="bag-icon" width={24} height={24} />
              {cart.length > 0 && (
                <span className="absolute -top-[9px] -right-[9px] bg-orangeLike text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
