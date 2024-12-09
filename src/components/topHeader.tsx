"use client";
import Image from "next/image";
import Link from "next/link";
import searchIcon from "../../public/assets/icons/MagnifyingGlass-icon.png";
import userIcon from "../../public/assets/icons/User-icon.png";
import bagIcon from "../../public/assets/icons/Bag-icon.png";
import { usePathname } from "next/navigation";

const TopHeader = () => {
  const pathname = usePathname();

  return (
    <header className="text-white bg-blackish h-[85px] body-font flex items-center z-20">
      <div className="px-[7%] w-full flex flex-wrap py-5 flex-col md:flex-row items-center z-20">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <h1 className="ml-3 text-xl text-white font-sans text-[24px] font-bold z-20">
            Food<span className="text-orangeLike">tuck</span>
          </h1>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-[16px] font-normal">
          <Link
            href="/"
            className={`mx-4 cursor-pointer transition-all duration-150 ${
              pathname === "/"
                ? "font-bold text-orangeLike"
                : "hover:font-bold hover:text-orangeLike"
            }`}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className={`mx-4 cursor-pointer transition-all duration-150 ${
              pathname === "/menu"
                ? "font-bold text-orangeLike"
                : "hover:text-orangeLike"
            }`}
          >
            Menu
          </Link>
          <Link
            href="/blog"
            className={`mx-4 cursor-pointer transition-all duration-150  ${
              pathname === "/blog"
                ? "font-bold text-orangeLike"
                : "hover:text-orangeLike"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/parts"
            className={`mx-4 cursor-pointer transition-all duration-150 ${
              pathname === "/parts"
                ? "font-bold text-orangeLike"
                : "hover:text-orangeLike"
            }`}
          >
            Pages
          </Link>
          <Link
            href="/about"
            className={`mx-4 cursor-pointer transition-all duration-150  ${
              pathname === "/about"
                ? "font-bold text-orangeLike"
                : "hover:text-orangeLike"
            }`}
          >
            About
          </Link>
          <Link
            href="/shop"
            className={`mx-4 cursor-pointer  transition-all duration-150 ${
              pathname === "/shop"
                ? "font-bold text-orangeLike"
                : "hover:text-orangeLike"
            }`}
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className={`mx-4 cursor-pointer transition-all duration-150  ${
              pathname === "/contact"
                ? "font-bold text-orangeLike"
                : "hover:text-orangeLike"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex gap-5">
          <Link href="/">
            <Image src={searchIcon} alt="search-icon" />
          </Link>
          <Link href="/signUp">
            <Image src={userIcon} alt="user-icon" />
          </Link>
          <Link href="/">
            <Image src={bagIcon} alt="bag-icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
