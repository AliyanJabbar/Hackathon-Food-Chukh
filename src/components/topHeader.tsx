"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import searchIcon from "../../public/assets/icons/MagnifyingGlass-icon.png";
import userIcon from "../../public/assets/icons/User-icon.png";
import bagIcon from "../../public/assets/icons/Bag-icon.png";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { urlFor } from "@/sanity/lib/image";
import { client } from "../sanity/lib/client";

const TopHeader = () => {
  const { cart, wishList } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false); //for responsiveness of menu(navbar)
  const [isPagesOpen, setIsPagesOpen] = useState(false); //for dropdown of pages
  const [isUserOpen, setIsUserOpen] = useState(false); //for dropdown of user/admin
  const [isSearchOpen, setIsSearchOpen] = useState(false); //if search is Open
  const [isClosingSearch, setIsClosingSearch] = useState(false); //if search is Closing for animation
  const [searchQuery, setSearchQuery] = useState(""); //Searched thing
  interface Product {
    id: number;
    name: string;
    displayName?: React.ReactNode;
    description: string;
    image: string;
  }
  const [products, setProducts] = useState<Product[]>([]); //Products from sanity
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); //filtering Products
  // based on search query
  const [message, setMessage] = useState<string>("");

  //function for fetching data from sanity
  const fetchProducts = async () => {
    try {
      const query = `*[_type == "food"]{ id, name, description, image }`;
      const data = await client.fetch(query);
      setProducts(data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return products; // Use existing products state as fallback
    }
  };

  useEffect(() => {
    let isFirstLoad = true; // Flag to track the initial page load

    const updateOnlineStatus = () => {
      const isNowOnline = navigator.onLine;

      if (isNowOnline) {
        if (!isFirstLoad) {
          setMessage("Back Online!");
          setTimeout(() => setMessage(""), 5000);
        }
        fetchProducts(); // fetching products if online
      } else {
        setMessage("Check Your Internet Connection!");
      }
      isFirstLoad = false; // Reset the flag after the first check
    };

    updateOnlineStatus();

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  //handling Navigation with a delay for animation
  const [visitedRoutes, setVisitedRoutes] = useState<string[]>([]); //collecting visited routes so that we will not show animation on them
  const handleNavigation = (path: string) => {
    if (path !== pathname) {
      setIsMenuOpen(false);
      setIsPagesOpen(false);
      setIsUserOpen(false);
      setIsSearchOpen(false);
      setSearchQuery("");

      if (!visitedRoutes.includes(path)) {
        setVisitedRoutes([...visitedRoutes, path]);
        setTimeout(() => {
          router.push(path);
        }, 1000);
      } else {
        router.push(path);
      }
    }
  };

  //search functionality
  const handleSearch = () => {
    if (searchQuery.trim()) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  //for updating filtered products real time while searching
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      const results = products
        .filter((product) => {
          const productName = product.name.toLowerCase();
          return query
            .toLowerCase()
            .split("")
            .every((letter) => productName.includes(letter));
        })
        .map((product) => {
          const productName = [...product.name];
          const highlightedName = productName.map((letter) => {
            if (query.toLowerCase().includes(letter.toLowerCase())) {
              return (
                <span
                  key={Math.random()}
                  className="text-orangeLike font-semibold"
                >
                  {letter}
                </span>
              );
            }
            return letter;
          });

          return {
            ...product,
            displayName: <span>{highlightedName}</span>,
          };
        });
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  //key press to perform functions
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
    if (e.key === "Escape") {
      setIsMenuOpen(false);
      setIsPagesOpen(false);
      setIsUserOpen(false);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  //handling click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const searchArea = document.getElementById("search-area");
      const PagesDropdown = document.getElementById("pages-dropdown");
      const userDropdown = document.getElementById("user-dropdown");
      const searchIcon = document.getElementById("search-icon");

      if (
        searchArea &&
        !searchArea.contains(event.target as Node) &&
        searchIcon &&
        !searchIcon.contains(event.target as Node)
      ) {
        setIsClosingSearch(true);
        setTimeout(() => {
          setIsSearchOpen(false);
          setIsClosingSearch(false);
          setSearchQuery("");
          setFilteredProducts([]);
        }, 1000);
      }

      if (PagesDropdown && !PagesDropdown.contains(event.target as Node)) {
        setIsPagesOpen(false);
      }
      if (userDropdown && !userDropdown.contains(event.target as Node)) {
        setIsUserOpen(false);
      }
    };

    if (isSearchOpen || isPagesOpen || isUserOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen, isPagesOpen, isUserOpen]);

  //handling scroll animation
  useEffect(() => {
    const handleScroll = () => {
      setIsClosingSearch(true);
      setTimeout(() => {
        setIsSearchOpen(false);
        setIsClosingSearch(false);
        setSearchQuery("");
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClosingSearch]);

  return (
    <header className="select-none text-white bg-blackish w-full body-font flex flex-wrap items-center z-20 px-[7%]">
      {/* notification */}
      {message && (
        <div className="fixed bottom-28 right-5 bg-orangeLike text-white px-4 py-2 rounded shadow-lg z-50">
          {message}
        </div>
      )}
      <div className="w-full flex py-5 flex-col md:flex-row items-center z-20">
        {/* Logo */}
        <div
          onClick={() => handleNavigation("/")}
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <h1 className="ml-3 text-xl cursor-pointer text-white font-sans text-[24px] font-bold z-20">
            Food<span className="text-orangeLike cursor-pointer">Chukh</span>
          </h1>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden ml-auto text-white focus:outline-none"
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
          }  flex-shrink-0 md:flex overflow-x-hidden w-full md:overflow-visible md:mx-auto md:w-auto justify-center items-center text-base text-[14px] md:text-[16px] font-normal gap-2`}
        >
          <div className="flex flex-col items-center justify-center md:flex-row gap-2 md:gap-1  lg:gap-3 md:w-full flex-nowrap md:flex-wrap">
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
                  id="pages-dropdown"
                  key={link.label}
                  className="group relative"
                  onClick={() => {
                    setIsPagesOpen(!isPagesOpen);
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
                        href="/chefs"
                        className="hover:text-orangeLike transition text-white text-[15px] font-bold block"
                      >
                        Our Chefs
                      </Link>
                    </li>
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
        <div className="flex gap-3 sm:gap-5 mt-4 md:mt-0">
          <div className="relative cursor-pointer">
            {/* search bar */}
            {isSearchOpen && (
              <div
                id="search-area"
                className={`fixed left-5 right-5 top-10 max-[800px]:top-24 mx-auto max-w-[600px] z-50 ${
                  isClosingSearch
                    ? "animate-searchSlideUp"
                    : "animate-slideDown"
                }`}
              >
                <div
                  className={`${searchQuery.trim() ? "rounded-b-none" : ""} flex items-center justify-center mx-auto rounded-lg border-2 border-orangeLike overflow-hidden shadow-lg bg-white transition-all duration-300 ease-in-out`}
                >
                  <input
                    type="text"
                    placeholder="Search Something..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    onKeyDown={handleKeyPress}
                    autoFocus
                    className="bg-white w-full outline-none text-gray-600 text-sm px-4 py-3 transition-all duration-200"
                  />
                  {/* showing search Results */}
                  {filteredProducts.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-md max-h-[300px] overflow-y-auto">
                      {filteredProducts.map((product) => (
                        <div
                          key={product.id}
                          className="p-3 flex items-start justify-start rounded-md hover:bg-gray-100 border-b-2 border-outline cursor-pointer gap-3"
                          onClick={() => {
                            router.push(`/shop/${product.id}`);
                            setIsSearchOpen(false);
                            setSearchQuery("");
                            setFilteredProducts([]);
                          }}
                        >
                          <Image
                            src={urlFor(product.image).url()}
                            alt={product.name}
                            width={50}
                            height={50}
                            className="rounded-md"
                          />
                          <div>
                            <h2 className="text-txtBlack">
                              {product.displayName
                                ? product.displayName
                                : product.name}
                            </h2>
                            <p className="text-txtBlack">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={handleSearch}
                    className={`flex items-center justify-center bg-orangeLike px-5 py-[15px] transition-all duration-200 group`}
                  >
                    <Image
                      id="search-icon"
                      src={searchIcon}
                      alt="search-icon"
                      width={24}
                      height={24}
                      className="group-hover:rotate-[360deg] cursor-pointer transition-all duration-500"
                    />
                  </button>
                </div>
              </div>
            )}
            {/* search Icon on header */}
            <Image
              id="search-icon"
              src={searchIcon}
              alt="search-icon"
              width={24}
              height={24}
              className="hover:-translate-y-1 cursor-pointer transition-all duration-200"
              onClick={() => setIsSearchOpen(true)}
            />
          </div>
          <div className="cursor-pointer">
            {/* user Icon */}
            <div
              className="relative hover:-translate-y-1 transition-all duration-200"
              onClick={() => {
                setIsUserOpen(!isUserOpen);
              }}
            >
              <Image
                src={userIcon}
                alt="user-icon"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              {wishList.length > 0 && (
                <span className="absolute -top-[9px] -right-[9px] bg-orangeLike text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {wishList.length}
                </span>
              )}
            </div>
            {isUserOpen && (
              <div
                id="user-dropdown"
                className="group relative"
                onClick={() => {
                  setIsUserOpen(!isUserOpen);
                }}
              >
                <ul
                  className={`absolute shadow-lg bg-black/10 backdrop-blur-md text-white space-y-3 top-5  -left-32 min-w-[250px] z-50 transition-all duration-300 ${
                    isUserOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  } px-6 py-4`}
                >
                  <li className="border-b py-2 ">
                    <Link
                      href="/userDetails"
                      className="hover:text-orangeLike transition text-white text-[15px] font-bold block"
                    >
                      Login / SignUp
                    </Link>
                  </li>
                  <li className="relative border-b py-2 ">
                    <Link
                      href="/wishList"
                      className="hover:text-orangeLike transition text-white text-[15px] font-bold block"
                    >
                      Your WishList
                    </Link>
                    {wishList.length > 0 && (
                      <span className="absolute top-2 right-0 bg-orangeLike text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {wishList.length}
                      </span>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* bag icon (Cart) */}
          <div
            onClick={() => handleNavigation("/shoppingCart")}
            className="cursor-pointer"
          >
            <div className="relative hover:-translate-y-1 transition-all duration-200">
              <Image
                src={bagIcon}
                alt="bag-icon"
                width={24}
                height={24}
                className="cursor-pointer"
              />
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
