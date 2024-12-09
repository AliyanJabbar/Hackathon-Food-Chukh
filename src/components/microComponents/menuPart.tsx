import React from "react";

const MenuPart = (props: {
  title: string;
  recipe: string;
  cal: string;
  price: string;
}) => {
  return (
    <div className="flex flex-row items-start w-[760px] justify-between my-2">
      {/* left */}
      <div className="font-sans space-y-2 min-w-[300px] cursor-pointer group">
        <h1 className="text-[24px] font-bold group-hover:text-orangeLike text-txtBlack transition-colors duration-150">{props.title}</h1>
        <p className="text-[16px] font-[300] text-txtGray">{props.recipe}</p>
        <p className="text-[16px] font-[300] text-txtlight">{props.cal}</p>
        {/* ending line */}
        <hr className="w-[760px] my-7" />
      </div>
      {/* right (price) */}
      <div className="text-orangeLike text-[24px] font-bold">{props.price}</div>
    </div>
  );
};

export default MenuPart;
