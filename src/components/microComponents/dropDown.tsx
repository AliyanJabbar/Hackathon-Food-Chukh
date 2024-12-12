"use client";
import Image from "next/image";
import React, { useState } from "react";
import drop from "../../../public/assets/shop/caretDown.png";
const DropDown = (props: { text: string }) => {
  const [dropDown, setDropDown] = useState(
    `${props.text === "Sort By :" ? "Newest" : "Default1"}`
  );
  return (
    <div className="dropdown">
      <div className="flex flex-row items-center gap-2">
        <p className="text-txtBlack text-[20px] text-nowrap">{props.text}</p>
        <div
          tabIndex={0}
          role="button"
          className="font-[300] w-[236px] btn m-1 bg-transparent text-txtVlight flex flex-row items-center justify-between text-[18px] hover:bg-white"
        >
          {dropDown}
          <Image src={drop} alt="caretDown" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a
            onClick={() => {
              props.text === "Sort By :" ? setDropDown("Newest") :   setDropDown("Default1");
            
            }}
          >
            {props.text === "Sort By :" ? "Newest" : "Default1"}
          </a>
        </li>
        <li>
          <a
            onClick={() => {
                props.text === "Sort By :" ? setDropDown("Oldest") :   setDropDown("Default2");
            }}
          >
           {props.text === "Sort By :" ? "Oldest" : "Default2"}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
