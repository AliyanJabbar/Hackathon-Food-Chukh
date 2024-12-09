import Image from "next/image";
import React from "react";
import menuimg2 from "../../../public/assets/menu/menu2-img.png";
import coffee from "../../../public/assets/menu/Coffee.png";
import MenuPart from "../microComponents/menuPart";

const Menu2 = () => {
  return (
    <div className="flex flex-row-reverse justify-between gap-20 px-[7%] pt-[100px]">
      {/* image div */}
      <div >
        <Image className="w-[448px] h-[600px]" src={menuimg2} alt="menuimg1" />
      </div>
      {/* main content */}
      <div className="flex flex-col items-start">
        <Image className="w-[24px] h-[24px]" src={coffee} alt="coffee" />
        <h1 className="font-sans text-[48px] font-bold text-txtBlack mb-3">
        Main Course
        </h1>
        <MenuPart
          title="Optic Big Breakfast Combo Menu"
          recipe="Toasted French bread topped with romano, cheddar"
          cal="560 CAL"
          price="32$"
        />
        <MenuPart
          title="Cashew Chicken With Stir-Fry"
          recipe="Gorgonzola, ricotta, mozzarella, taleggio"
          cal="700 CAL"
          price="43$"
        />
        <MenuPart
          title=" Vegetables & Green Salad"
          recipe="Ground cumin, avocados, peeled and cubed"
          cal="1000 CAL"
          price="14$"
        />
        <MenuPart
          title="Spicy Vegan Potato Curry"
          recipe="Spreadable cream cheese, crumbled blue cheese"
          cal="560 CAL"
          price="35$"
        />
      </div>
    </div>
  );
};

export default Menu2;
