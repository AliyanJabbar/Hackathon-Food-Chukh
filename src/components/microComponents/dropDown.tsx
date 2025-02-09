"use client";
import React, { useState, useRef, useEffect } from "react";

interface DropDownProps {
  text: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ text, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(() => {
    if (text === "Sort By :") {
      return "Low To High Price";
    } else if (text === "Filter :") {
      return "Newest";
    }
    return options[0];
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-row items-center gap-2" ref={dropdownRef}>
      <p className="text-txtBlack text-[20px] text-wrap min-[400px]:text-nowrap">
        {text}
      </p>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-[300] w-[236px] btn m-1 bg-transparent text-txtVlight flex flex-row items-center justify-between text-[18px] hover:bg-white"
        >
          {selected}
          <svg
            className={`w-2.5 h-2.5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="#FF9F0D"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-[236px] bg-white rounded-lg shadow-lg mt-1 z-50 max-h-[300px] overflow-y-auto">
            <ul className="py-2">
              {options.map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 whitespace-nowrap"
                  onClick={() => handleSelect(option)}
                >
                  <svg
                    className={`w-5 h-5 ${
                      selected === option ? "text-orangeLike" : "text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    {selected === option && (
                      <circle cx="12" cy="12" r="5" fill="currentColor" />
                    )}
                  </svg>
                  <span className="text-gray-700">{option}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
