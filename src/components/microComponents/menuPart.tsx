import React from "react";

const MenuPart = (props: {
  title: string;
  recipe: string;
  cal: string;
  price: string;
}) => {
  return (
    <div className="flex flex-col w-full items-start justify-center md:flex-row md:w-[760px] my-2 min-[1200px]:px-[7%] min-[1200px]:ml-6">
      {/* left */}
      <div className="font-sans space-y-2 cursor-pointer group min-[500px]:w-auto w-[300px]">
        <h1 className="text-[24px] font-bold group-hover:text-orangeLike text-txtBlack transition-colors duration-150 ">
          {props.title}
        </h1>
        <p className="text-[16px] font-[300] text-txtGray ">{props.recipe}</p>
        <p className="text-[16px] font-[300] text-txtlight ">{props.cal}</p>
        {/* ending line */}
        <hr className="hidden md:block w-[760px] my-7" />
      </div>
      {/* right (price) */}
      <div className="text-orangeLike text-[24px] font-bold">{props.price}</div>
      <hr className="block md:hidden w-[760px] my-7" />
    </div>
  );
};

export default MenuPart;
